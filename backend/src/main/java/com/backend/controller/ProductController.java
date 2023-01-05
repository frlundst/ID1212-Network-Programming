package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Product;
import com.backend.repository.ProductRepository;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    public ProductController() {
    }

    @GetMapping("/category/{id}/products")
    public List<Product> getCategory(@PathVariable String id, Model model) {
        return productRepository.findByCategoryId(id);
    }
}

