package com.tts.dashboard.service;

import com.tts.dashboard.model.Product;
import com.tts.dashboard.repository.CategoryRepository;
import com.tts.dashboard.repository.ProductRepository;
import com.tts.dashboard.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    SupplierRepository supplierRepository;

    public Page<Product> findAll(int page, int size, String direction, String sortBy ) {
        Pageable paginatedPages = PageRequest.of(page, size, Sort.Direction.fromString(direction), sortBy);
        return productRepository.findAll(paginatedPages);
    }

    public Page<Product> findAllAndOrderByDiscount(int page, int size, String direction) {
        Pageable paginatedPages = PageRequest.of(page, size);
        if(direction.equals("ASC")) {
            return productRepository.findAllAndOrderByDiscountAsc(paginatedPages);
        } else {
            return productRepository.findAllAndOrderByDiscountDesc(paginatedPages);
        }
    }

    public ResponseEntity<String> createProduct(Product product) {
        Optional<Product> newProduct = productRepository.findByName(product.getName());
        if(newProduct.isPresent()) {
            // If product already exists with same name, send back a message and a status of 400 Bad Request
            return new ResponseEntity<String>("A product already exists with this name", HttpStatus.BAD_REQUEST);
        }
//        Category category = categoryRepository.findById(product.)
        Product savedProduct = productRepository.save(product);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedProduct.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    public ResponseEntity<Product> updateProduct(Product product, long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        System.out.println(productOptional.get());
        if (!productOptional.isPresent()) {
            // Sends back a status of 404 Not Found
            return ResponseEntity.notFound().build();
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

}
