package com.neon1024.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/products")
public class ProductsController {
    @GetMapping
    public ResponseEntity<String> getProducts() {
        return ResponseEntity.ok("products");
    }
}
