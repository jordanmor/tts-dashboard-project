package com.tts.dashboard.controller;

import com.tts.dashboard.model.Category;
import com.tts.dashboard.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping(value="/categories")
    public List<Category> getProducts() {
        return categoryService.findAll();
    }

}
