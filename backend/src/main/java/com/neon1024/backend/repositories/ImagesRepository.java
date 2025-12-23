package com.neon1024.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

import com.neon1024.backend.models.Image;

public interface ImagesRepository extends JpaRepository<Image, UUID> {
    
}
