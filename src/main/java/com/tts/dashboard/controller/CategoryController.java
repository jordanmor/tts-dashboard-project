package com.tts.dashboard.controller;

import com.tts.dashboard.model.Category;
import com.tts.dashboard.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping(value="/categories")
    public Page<Category> getCategories(
            @RequestParam int page,
            @RequestParam String direction,
            @RequestParam String sortBy
    ) {
        return categoryService.findAll(page, 10, direction, sortBy);
    }
}
