package com.tts.dashboard.service;

import com.tts.dashboard.model.Category;
import com.tts.dashboard.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public Page<Category> findAll(int page, int size, String direction, String sortBy) {
        Pageable paginatedPages = PageRequest.of(page, size, Sort.Direction.fromString(direction), sortBy);
        return categoryRepository.findAll(paginatedPages);
    }

    public ResponseEntity<String> createCategory(Category category) {
        Optional<Category> presentCategory = categoryRepository.findByName(category.getName());
        if(presentCategory.isPresent()) {
            return new ResponseEntity<String>("A category already exists with this name", HttpStatus.BAD_REQUEST);
        }
        Category savedCategory = categoryRepository.save(category);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedCategory.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    public ResponseEntity<Category> updateCategory(Category category, long id) {
        Optional<Category> categoryOptional = categoryRepository.findById(id);
        if (!categoryOptional.isPresent()) {
            // Sends back a status of 404 Not Found
            return ResponseEntity.notFound().build();
        }
        category.setId(id);
        categoryRepository.save(category);
        // Sends back a status of 204 Not Content, which implies a successful request
        return ResponseEntity.noContent().build();
    }

    public ResponseEntity<Category> deleteById(long id) {
        Optional<Category> categoryOptional = categoryRepository.findById(id);
        if (!categoryOptional.isPresent()) {
            // Sends back a status of 404 Not Found
            return ResponseEntity.notFound().build();
        }
        categoryRepository.deleteById(id);
        // Sends back a status of 204 Not Content, which implies a successful request
        return ResponseEntity.noContent().build();
    }
}
