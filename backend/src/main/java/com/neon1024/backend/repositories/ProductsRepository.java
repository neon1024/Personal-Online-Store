package com.neon1024.backend.repositories;

import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

import com.neon1024.backend.models.Product;

@Repository
public interface ProductsRepository extends JpaRepository<Product, UUID> {
    
}
