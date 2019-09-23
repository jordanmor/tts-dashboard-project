package com.tts.dashboard.service;

import com.tts.dashboard.model.Product;
import com.tts.dashboard.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

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

}
