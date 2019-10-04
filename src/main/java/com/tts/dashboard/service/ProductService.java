package com.tts.dashboard.service;

import com.tts.dashboard.model.Product;
import com.tts.dashboard.repository.CategoryRepository;
import com.tts.dashboard.repository.ProductRepository;
import com.tts.dashboard.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.math.BigDecimal;
import java.math.MathContext;
import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    SupplierRepository supplierRepository;

    public Page<Product> findProductsPaginated(int page, int pageSize, String direction, String sortBy, boolean sortByDiscount) {
        if(sortByDiscount == true) {
            return findAllAndOrderByDiscount(page, pageSize, direction);
        }
        return findAllPaginated(page, pageSize, direction, sortBy);
    }

    public Page<Product> findProductsFilteredAndPaginated(
            int page, int pageSize, String direction, String sortBy, boolean sortByDiscount, String filterBy, String filterAlsoBy) {
        Map<String, String> filteredValues = getFilterValues(filterBy, filterAlsoBy);
        Pageable paginatedPages = PageRequest.of(page, pageSize, Sort.Direction.fromString(direction), sortBy);
        Pageable paginatedPagesForDiscountSort = PageRequest.of(page, pageSize);

        filterBy = filteredValues.get("filterBy");
        filterAlsoBy = filteredValues.get("filterAlsoBy");
        String filteredValue = filteredValues.get("filterByValue");

         if(!filterBy.equals("availability")) {
             long id = Long.parseLong(filteredValues.get("filterByValue"));
             if(filterAlsoBy.equals("none")) {
                 if(filterBy.equals("category")) {
                     // Return Products Filtered by CategoryId
                     return findProductsFilteredByCategory(
                             id, sortByDiscount, direction, paginatedPages, paginatedPagesForDiscountSort);
                 } else {
                     // Return Products Filtered by SupplierId
                     return findProductsFilteredBySupplier(
                             id, sortByDiscount, direction, paginatedPages, paginatedPagesForDiscountSort);
                 }
             } else {
                 boolean isAvailable = Boolean.parseBoolean(filteredValues.get("filterAlsoByValue"));
                 if(filterBy.equals("category")) {
                     // Return Products Filtered by CategoryId and Availability
                     return findProductsFilteredByCategoryAndAvailability(
                             id, isAvailable, sortByDiscount, direction, paginatedPages, paginatedPagesForDiscountSort);
                 } else {
                     // Return Products Filtered by SupplierId and Availability
                     return findProductsFilteredBySupplierAndAvailability(
                             id, isAvailable, sortByDiscount, direction, paginatedPages, paginatedPagesForDiscountSort);
                 }
             }
         }
         // Return Products Filtered by Availability
         boolean isAvailable = Boolean.parseBoolean(filteredValues.get("filterByValue"));
         return findByAvailability(page, pageSize, direction, sortBy, isAvailable, sortByDiscount);
    }

    public ResponseEntity<String> createProduct(Product product) {
        Optional<Product> newProduct = productRepository.findByName(product.getName());
        if(newProduct.isPresent()) {
            // If product already exists with same name, send back a message and a status of 400 Bad Request
            return new ResponseEntity<String>("A product already exists with this name", HttpStatus.BAD_REQUEST);
        }
        Product savedProduct = productRepository.save(product);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedProduct.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    public ResponseEntity<String> updateProduct(Product product, long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (!productOptional.isPresent()) {
            // Sends back a status of 404 Not Found
            return ResponseEntity.notFound().build();
        }
        Optional<Product> newProduct = productRepository.findByName(product.getName());
        // Does not reject a product update of the same name when the product with that name is updating itself
        if(newProduct.isPresent() && !productOptional.get().getName().equals(newProduct.get().getName())) {
            // If product already exists with same name, send back a message and a status of 400 Bad Request
            return new ResponseEntity<String>("A product already exists with this name", HttpStatus.BAD_REQUEST);
        }
        product.setId(id);
        productRepository.save(product);
        // Sends back a status of 204 Not Content, which implies a successful request
        return ResponseEntity.noContent().build();
    }

    public ResponseEntity<Product> deleteById(long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (!productOptional.isPresent()) {
            // Sends back a status of 404 Not Found
            return ResponseEntity.notFound().build();
        }
        productRepository.deleteById(id);
        // Sends back a status of 204 Not Content, which implies a successful request
        return ResponseEntity.noContent().build();
    }

    private Page<Product> findProductsFilteredByCategory(
            long id, boolean sortByDiscount, String direction, Pageable paginatedPages, Pageable paginatedPagesForDiscountSort) {
        if(sortByDiscount) {
            return paginateList(productRepository.findByCategoryId(id), paginatedPagesForDiscountSort, direction);
        } else {
            return productRepository.findByCategoryId(id, paginatedPages);
        }
    }

    private Page<Product> findProductsFilteredByCategoryAndAvailability(
            long id, boolean isAvailable, boolean sortByDiscount, String direction,
            Pageable paginatedPages, Pageable paginatedPagesForDiscountSort) {
        if(sortByDiscount) {
            return paginateList(productRepository.findByCategoryIdAndAvailabilityEquals(
                    id, isAvailable), paginatedPagesForDiscountSort, direction);
        } else {
            return productRepository.findByCategoryIdAndAvailabilityEquals(id, isAvailable, paginatedPages);
        }
    }

    private Page<Product> findProductsFilteredBySupplier(
            long id, boolean sortByDiscount, String direction, Pageable paginatedPages, Pageable paginatedPagesForDiscountSort) {
        if(sortByDiscount) {
            return paginateList(productRepository.findBySupplierId(id), paginatedPagesForDiscountSort, direction);
        } else {
            return productRepository.findBySupplierId(id, paginatedPages);
        }
    }

    private Page<Product> findProductsFilteredBySupplierAndAvailability(
            long id, boolean isAvailable, boolean sortByDiscount, String direction,
            Pageable paginatedPages, Pageable paginatedPagesForDiscountSort) {
        if(sortByDiscount) {
            return paginateList(
                    productRepository.findBySupplierIdAndAvailabilityEquals(id, isAvailable), paginatedPagesForDiscountSort, direction);
        } else {
            return productRepository.findBySupplierIdAndAvailabilityEquals(id, isAvailable, paginatedPages);
        }
    }

    private Page<Product> findAllPaginated(int page, int size, String direction, String sortBy ) {
        Pageable paginatedPages = PageRequest.of(page, size, Sort.Direction.fromString(direction), sortBy);
        return productRepository.findAll(paginatedPages);
    }

    private Page<Product> findAllAndOrderByDiscount(int page, int size, String direction) {
        Pageable paginatedPages = PageRequest.of(page, size);
        if(direction.equals("ASC")) {
            return productRepository.findAllAndOrderByDiscountAsc(paginatedPages);
        } else {
            return productRepository.findAllAndOrderByDiscountDesc(paginatedPages);
        }
    }

    private Page<Product> findByAvailability(
            int page, int pageSize, String direction,  String sortBy, boolean isAvailable, boolean sortByDiscount) {
        if(!sortByDiscount) {
            Pageable paginatedPages = PageRequest.of(page, pageSize, Sort.Direction.fromString(direction), sortBy);
            return productRepository.findByAvailabilityEquals(isAvailable, paginatedPages);
        } else {
            Pageable paginatedPages = PageRequest.of(page, pageSize);
            if(isAvailable) {
                if(direction.equals("ASC")) {
                    return productRepository.findAllAvailableProductsAndOrderByDiscountAsc(paginatedPages);
                } else {
                    return productRepository.findAllAvailableProductsAndOrderByDiscountDesc(paginatedPages);
                }
            } else {
                if(direction.equals("ASC")) {
                    return productRepository.findAllProductsNotAvailableAndOrderByDiscountAsc(paginatedPages);
                } else {
                    return productRepository.findAllProductsNotAvailableAndOrderByDiscountDesc(paginatedPages);
                }
            }
        }
    }

    private Page<Product> paginateList(List<Product> filteredProducts, Pageable paginatedPages, String direction) {
        List<Product> filteredProductsSorted;
        MathContext mc = new MathContext(2);
        if(direction.equals("DESC")) {
            filteredProductsSorted = filteredProducts
                    .stream()
                    .sorted(Comparator.comparing((Product list ) ->
                            BigDecimal.ONE.subtract(list.getSalePrice().divide(list.getFullPrice(), mc))))
                    .collect(Collectors.toList());
        } else {
            filteredProductsSorted = filteredProducts
                    .stream()
                    .sorted(Comparator.comparing((Product list ) ->
                            BigDecimal.ONE.subtract(list.getSalePrice().divide(list.getFullPrice(), mc)))
                            .reversed())
                    .collect(Collectors.toList());
        }
        PagedListHolder<Product> page = new PagedListHolder<>(filteredProductsSorted);
        page.setPageSize(paginatedPages.getPageSize());
        page.setPage(paginatedPages.getPageNumber());
        return new PageImpl<Product>(page.getPageList(), paginatedPages, filteredProductsSorted.size());
    }

    private Map<String, String> getFilterValues(String filterBy, String filterAlsoBy) {
        Map<String, String> filteredStringValues = new HashMap<>();
        String[] filterByValues = filterBy.split(" ");
        String[] filterAlsoByValues= filterAlsoBy.split(" ");
        filteredStringValues.put("filterBy", filterByValues[0]);
        filteredStringValues.put("filterByValue", filterByValues[1]);
        filteredStringValues.put("filterAlsoBy", filterAlsoByValues[0]);
        if(!filterAlsoByValues[0].equals("none")) {
            filteredStringValues.put("filterAlsoByValue", filterAlsoByValues[1]);
        } else {
            filteredStringValues.put("filterAlsoByValue", null);
        }

        // If filter query contains information on category/supplier and availability,
        // make filterBy always = category/supplier and filterAlsoBy always = availability
        // This simplifies the logic needed to grab data from db with provided query parameters
        if(filteredStringValues.get("filterBy").equals("availability") && !filteredStringValues.get("filterAlsoBy").equals("none")) {
            Map<String, String> newFilteredValues = new HashMap<>();
            newFilteredValues.put("filterBy", filteredStringValues.get("filterAlsoBy"));
            newFilteredValues.put("filterByValue", filteredStringValues.get("filterAlsoByValue"));
            newFilteredValues.put("filterAlsoBy", filteredStringValues.get("filterBy"));
            newFilteredValues.put("filterAlsoByValue", filteredStringValues.get("filterByValue"));
            return newFilteredValues;
        }
        return filteredStringValues;
    }
}
