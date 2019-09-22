package com.tts.dashboard.service;

import com.tts.dashboard.model.Product;
import com.tts.dashboard.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public Page<Product> findAll(int page) {
        Pageable paginatedPages = PageRequest.of(page, 50);
        return productRepository.findAll(paginatedPages);
    }

}
