package com.tts.dashboard.service;

import com.tts.dashboard.model.Category;
import com.tts.dashboard.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public Page<Category> findAll(int page, int size, String direction, String sortBy) {
        Pageable paginatedPages = PageRequest.of(page, size, Sort.Direction.fromString(direction), sortBy);
        return categoryRepository.findAll(paginatedPages);
    }
}
