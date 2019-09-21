package com.tts.dashboard.service;

import com.tts.dashboard.model.Product;
import com.tts.dashboard.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

}
