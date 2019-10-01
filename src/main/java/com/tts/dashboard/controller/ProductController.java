package com.tts.dashboard.controller;

import com.tts.dashboard.model.Product;
import com.tts.dashboard.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping
    public Page<Product> getProductsPaginated(
            @RequestParam int page,
            @RequestParam int pageSize,
            @RequestParam String direction,
            @RequestParam String sortBy,
            @RequestParam(defaultValue = "false") boolean sortByDiscount,
            @RequestParam(defaultValue = "false") boolean filtered,
            @RequestParam(required=false) String filterBy,
            @RequestParam(required=false) String filterAlsoBy
            ) {
        if(filtered) {
            System.out.println(filterBy);
            System.out.println(filterAlsoBy);
            return productService.findProductsFilteredAndPaginated(page, pageSize, direction, sortBy, sortByDiscount, filterBy, filterAlsoBy);
        }
        return productService.findProductsPaginated(page, pageSize, direction, sortBy, sortByDiscount);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @PutMapping("{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product, @PathVariable long id) {
        return productService.updateProduct(product, id);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Product> deleteProductById(@PathVariable long id) {
        return productService.deleteById(id);
    }
}
