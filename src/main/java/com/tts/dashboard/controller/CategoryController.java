package com.tts.dashboard.controller;

import com.tts.dashboard.model.Category;
import com.tts.dashboard.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public Page<Category> getAllCategories(
            @RequestParam int page,
            @RequestParam int pageSize,
            @RequestParam String direction,
            @RequestParam String sortBy
    ) {
        return categoryService.findAll(page, pageSize, direction, sortBy);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> createCategory(@RequestBody Category category) {
        return categoryService.createCategory(category);
    }

    @PutMapping("{id}")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category, @PathVariable long id) {
        return categoryService.updateCategory(category, id);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Category> deleteCategoryById(@PathVariable long id) {
        return categoryService.deleteById(id);
    }
}
