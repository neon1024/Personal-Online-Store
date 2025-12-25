package com.neon1024.backend.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.neon1024.backend.services.ImagesService;

import java.util.List;

import java.util.UUID;

import com.neon1024.backend.models.ImageDTO;

import java.util.Map;

@RestController
@RequestMapping("/images")
public class ImagesController {
    private ImagesService imagesService;

    public ImagesController(ImagesService imagesService) {
        this.imagesService = imagesService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<ImageDTO>> getAllByProductId(@PathVariable("id") UUID id) {
        List<ImageDTO> fetchedImagesDTOs = this.imagesService.getAllImagesByProductId(id);
        
        return ResponseEntity.status(200).body(fetchedImagesDTOs);
    }

    @PostMapping("/{id}")
    public ResponseEntity<?> addAllByProductId(@RequestParam("images") MultipartFile[] images, @PathVariable("id") UUID id) {
        Integer uploadedImagesCount = this.imagesService.uploadAllImagesForProductId(images, id);

        if(uploadedImagesCount != images.length) {
            return ResponseEntity.status(500).body(Map.of("Error", "Upload failed"));
        }

        return ResponseEntity.status(201).body(Map.of("OK", uploadedImagesCount + " Images uploaded successfully"));
    }

    // TODO provide public ids
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImagesByProductId(@PathVariable UUID id) {
        Integer deletedImagesCount = this.imagesService.deleteImagesByProductId(id);

        return ResponseEntity.status(200).body(deletedImagesCount + " Images deleted successfuly");
    }
}
