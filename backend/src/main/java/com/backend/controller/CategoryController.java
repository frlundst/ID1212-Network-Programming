package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Category;
import com.backend.repository.CategoryRepository;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    public CategoryController() {
    }

    @GetMapping("/category")
    public Category getCategory() {
        return new Category("1", "test");
    }

    @GetMapping("/categories")
    public List<Category> getCategories(Model model) {
        return categoryRepository.findAll();
    }
}
