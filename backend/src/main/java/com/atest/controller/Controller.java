package com.atest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.atest.repository.Repository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class Controller {
    @Autowired
    Repository repository;

    @GetMapping("/test")
    public String test() {
        return "test";
    }
}
