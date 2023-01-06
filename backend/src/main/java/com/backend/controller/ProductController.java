package com.backend.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Product;
import com.backend.repository.ProductRepository;

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
        /*ArrayList<ProductWithCount> products = new ArrayList<>();

        for(String id : idArray){
            Product _p = productRepository.findById(id).get();
            ProductWithCount product = new ProductWithCount();
            product.setId(_p.getId());
            product.setName(_p.getName());
            product.setPrice(_p.getPrice());
            product.setCount(1);
            product.setNumberAvailable(_p.getNumberAvailable());
            
            for(ProductWithCount p : products){
                if(p.getId().equals(product.getId())){
                    product.setCount(p.getCount() + 1);
                    products.remove(p);
                    break;
                }
            }
            products.add(product);
        }*/

        return productRepository.findAllById(idList);
    }

}

