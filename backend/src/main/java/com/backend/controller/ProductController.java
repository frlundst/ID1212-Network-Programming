package com.backend.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Product;
import com.backend.model.AddProductRequest;
import com.backend.repository.ProductRepository;

import jakarta.transaction.Transactional;

@CrossOrigin(origins = {"http://127.0.0.1:5173", "http://localhost:5173"})
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

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable String id, Model model) {
        return productRepository.findById(id).get();
    }

    @GetMapping("/products/{ids}")
    public List<Product> getProducts(@PathVariable String ids, Model model) {
        List<String> idList = Arrays.asList(ids.split(","));
        return productRepository.findAllById(idList);
    }

    @GetMapping("/products/search/{name}")
    public List<Product> searchProducts(@PathVariable String name, Model model) {
        return productRepository.findByNameContaining(name);
    }

    @PostMapping("/product/add")
    @Transactional
    public String addProduct(@RequestBody AddProductRequest apr) {
        productRepository.saveWithCategory(apr.getName(), apr.getDescription(), apr.getImagePathname(), apr.getPrice(), apr.getOldPrice(), apr.getNumberAvailable(), apr.getCategoryName());
        return "Success";
    }
}

