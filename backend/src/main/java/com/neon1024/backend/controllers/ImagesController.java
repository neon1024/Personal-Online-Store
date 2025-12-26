package com.neon1024.backend.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;
import com.neon1024.backend.repositories.ProductsRepository;
import com.neon1024.backend.services.ImagesService;

import java.util.List;

import java.util.UUID;

import com.neon1024.backend.models.ImageDTO;

import java.util.Map;

import org.springframework.http.MediaType;

import java.util.ArrayList;

@RestController
@RequestMapping("/images")
public class ImagesController {
    private final ImagesService imagesService;
    private final ProductsRepository productsRepository;

    public ImagesController(ImagesService imagesService, ProductsRepository productsRepository) {
        this.imagesService = imagesService;
        this.productsRepository = productsRepository;
    }

    // get all images for a product by product id
    @GetMapping("/{id}")
    public ResponseEntity<?> getAllImagesOfProductByProductId(@PathVariable UUID id) {
        if(!this.productsRepository.existsById(id)) {
            return ResponseEntity.status(404).body(Map.of("Error", "Product doesn't exist"));
        }

        try {
            List<ImageDTO> fetchedImagesDTOs = this.imagesService.getAllImagesOfProductByProductId(id);
        
            return ResponseEntity.status(200).body(fetchedImagesDTOs);

        } catch(Exception e) {
            return ResponseEntity.badRequest().body(Map.of("Error", e.getMessage()));
        }
    }

    // add images for a product by product id
    @PostMapping(
        value = "/{id}",
        consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> addAllImagesForProductByProductId(
        @RequestParam("images") MultipartFile[] images,
        @PathVariable UUID id
    ) {
        if(!this.productsRepository.existsById(id)) {
            return ResponseEntity.status(404).body(Map.of("Error", "Product doesn't exist"));
        }

        try {
            Integer uploadedImagesCount = this.imagesService.uploadAllImagesForProductByProductId(images, id);

            if(uploadedImagesCount != images.length) {
                return ResponseEntity.status(500).body(Map.of("Error", "Upload failed"));
            }

            return ResponseEntity.status(201).body(Map.of("OK", uploadedImagesCount + " Images uploaded successfully"));

        } catch(Exception e) {
            return ResponseEntity.badRequest().body(Map.of("Error", e.getMessage()));
        }
    }

    // delete images for a product by product id
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImagesOfProductByProductId(
        @PathVariable UUID id,
        @RequestBody List<ImageDTO> imageDTOs
    ) {
        if(!this.productsRepository.existsById(id)) {
            return ResponseEntity.status(404).body(Map.of("Error", "Product doesn't exist"));
        }

        try {
            Integer deletedImagesCount = this.imagesService.deleteImagesOfProductByProductId(id, imageDTOs);

            return ResponseEntity.status(200).body(deletedImagesCount + " Images deleted successfuly");
        
        } catch(Exception e) {
            return ResponseEntity.badRequest().body(Map.of("Error", e.getMessage()));
        }
    }
}
