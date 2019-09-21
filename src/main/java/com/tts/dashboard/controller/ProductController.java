package com.tts.dashboard.controller;

import com.tts.dashboard.model.Product;
import com.tts.dashboard.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping(value="/products")
    public List<Product> getProducts() {
        return productService.findAll();
    }

}
