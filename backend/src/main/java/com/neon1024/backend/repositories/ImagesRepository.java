package com.neon1024.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

import com.neon1024.backend.models.Image;

import java.util.List;

public interface ImagesRepository extends JpaRepository<Image, UUID> {
    @Query("""
    SELECT i
    FROM Image i
    JOIN FETCH i.product
    WHERE i.product.id = :id
    """)
    public List<Image> findAllImagesOfProductByProductId(UUID id);

}
