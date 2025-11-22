package com.neon1024.backend.services;

import org.springframework.stereotype.Service;

import com.neon1024.backend.repositories.ProductsRepository;

import jakarta.transaction.Transactional;

import com.neon1024.backend.models.Product;

import com.neon1024.backend.models.ProductDTO;

import java.util.UUID;

import java.util.List;

@Service
@Transactional
public class ProductsService {
    private ProductsRepository productsRepository;

    public ProductsService(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public List<Product> getAllProducts() {
        return productsRepository.findAll();
    }

    public Product addProduct(ProductDTO dto) {
        Product product = new Product(dto.name, dto.category, dto.description, dto.price, dto.currency, dto.quantity, dto.weight, dto.unit, dto.imageUrl);
        this.productsRepository.save(product);
        return product;
    }

    public void deleteProductById(UUID id) {
        this.productsRepository.deleteById(id);
    }

    public int updateProductById(UUID id, ProductDTO dto) {
        int numberOfAffectedRows = this.productsRepository.updateById(
            id,
            dto.name,
            dto.category, dto.description, dto.price, dto.currency, dto.quantity, dto.weight, dto.unit, dto.imageUrl
        );

        return numberOfAffectedRows;
    }
}
