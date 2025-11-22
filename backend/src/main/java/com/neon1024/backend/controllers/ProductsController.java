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


@RestController
@RequestMapping("/products")
public class ProductsController {
    private ProductsService productsService;
    
    public ProductsController(ProductsService productsService) {
        this.productsService = productsService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getProducts() {
        List<Product> fetchedProducts = productsService.getAllProducts();
        return ResponseEntity.status(200).body(fetchedProducts);
    }

    @PostMapping
    public ResponseEntity<Product> postProduct(@Valid @RequestBody ProductDTO dto) {
        Product addedProduct = this.productsService.addProduct(dto);
        return ResponseEntity.status(201).body(addedProduct);
    }
    
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
