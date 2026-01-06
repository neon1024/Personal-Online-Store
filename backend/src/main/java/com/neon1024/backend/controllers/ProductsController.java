package com.neon1024.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.neon1024.backend.models.Product;
import com.neon1024.backend.models.ProductDTO;
import com.neon1024.backend.services.ProductsService;

import jakarta.validation.Valid;

import java.util.List;

import java.util.UUID;
import org.springframework.web.bind.annotation.PutMapping;

import com.cloudinary.Cloudinary;

import java.util.Map;

import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductsController {
    private ProductsService productsService;
    private Cloudinary cloudinary;
    
    public ProductsController(ProductsService productsService, Cloudinary cloudinary) {
        this.productsService = productsService;
        this.cloudinary = cloudinary;
    }

    @GetMapping("/cloudinary")
    public String getCloudinary() {
        return this.cloudinary.config.cloudName;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> fetchedProducts = productsService.getAllProducts();
        return ResponseEntity.status(200).body(fetchedProducts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable UUID id) {
        Optional<Product> fetchedProduct = this.productsService.getProductById(id);
        
        if(fetchedProduct.isEmpty()) {
            return ResponseEntity.status(404).body(Map.of("Error", "Product not found"));
        }

        return ResponseEntity.status(200).body(fetchedProduct);
    }

    @PostMapping
    public ResponseEntity<Product> postProduct(@Valid @RequestBody ProductDTO dto) {
        Product addedProduct = this.productsService.addProduct(dto);
        return ResponseEntity.status(201).body(addedProduct);
    }
    
    // TODO also delete images from cloudinary
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable UUID id) {
        this.productsService.deleteProductById(id);
        return ResponseEntity.status(200).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Integer> putProduct(@PathVariable UUID id, @Valid @RequestBody ProductDTO dto) {
        int numberOfAffectedRows = this.productsService.updateProductById(id, dto);
        
        int statusCode = 200;

        if(numberOfAffectedRows == 0) {
            statusCode = 404;
        }

        return ResponseEntity.status(statusCode).body(numberOfAffectedRows);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Integer> patchProduct(@PathVariable UUID id, @Valid @RequestBody ProductDTO dto) {
        int numberOfAffectedRows = this.productsService.updateProductById(id, dto);

        int statusCode = 200;

        if(numberOfAffectedRows == 0) {
            statusCode = 404;
        }

        return ResponseEntity.status(statusCode).body(numberOfAffectedRows);
    }
}
