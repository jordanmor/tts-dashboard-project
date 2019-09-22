package com.tts.dashboard.controller;

import com.tts.dashboard.model.Product;
import com.tts.dashboard.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping(value="/products")
    public Page<Product> getProducts(@RequestParam int page) {
        return productService.findAll(page);
    }

}
