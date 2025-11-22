package com.neon1024.backend.repositories;

import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.UUID;

import com.neon1024.backend.models.Product;

@Repository
public interface ProductsRepository extends JpaRepository<Product, UUID> {
    @Modifying
    @Query("UPDATE Product p SET " +
        "p.name = COALESCE(:name, p.name), " +
        "p.category = COALESCE(:category, p.category), " +
        "p.description = COALESCE(:description, p.description), " +
        "p.price = COALESCE(:price, p.price), " +
        "p.currency = COALESCE(:currency, p.currency), " +
        "p.quantity = COALESCE(:quantity, p.quantity), " +
        "p.weight = COALESCE(:weight, p.weight), " +
        "p.unit = COALESCE(:unit, p.unit), " +
        "p.imageUrl = COALESCE(:imageUrl, p.imageUrl) " +
        "WHERE p.id = :id"
    )
    public int updateById(
        @Param("id") UUID id,
        @Param("name") String name,
        @Param("category") String category,
        @Param("description") String description,
        @Param("price") BigDecimal price,
        @Param("currency") String currency,
        @Param("quantity") Integer quantity,
        @Param("weight") BigDecimal weight,
        @Param("unit") String unit,
        @Param("imageUrl") String imageUrl
    );
}
