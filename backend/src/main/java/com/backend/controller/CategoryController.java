package com.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Category;
import com.backend.model.AddCategoryRequest;
import com.backend.repository.CategoryRepository;

import jakarta.transaction.Transactional;

@CrossOrigin(origins = {"http://127.0.0.1:5173", "http://localhost:5173"})
@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    public CategoryController() {
    }

    @GetMapping("/category/{id}")
    public Optional<Category> getCategory(@PathVariable String id, Model model) {
        return categoryRepository.findById(id);
    }

    @GetMapping("/categories")
    public List<Category> getCategories(Model model) {
        return categoryRepository.findAll();
    }

    @GetMapping("categories/search/{name}")
    public List<Category> searchCategories(@PathVariable String name, Model model) {
        return categoryRepository.findByNameContaining(name);
    }

    @PostMapping("/category/add")
    @Transactional
    public String addCategory(@RequestBody AddCategoryRequest acr) {
        if(acr.getParentName() == null){
            categoryRepository.saveWithoutParent(acr.getName(), acr.getDescription());
        } else {
            categoryRepository.saveWithParent(acr.getName(), acr.getDescription(), acr.getParentName());
        }
        return "Success";
    }
}
