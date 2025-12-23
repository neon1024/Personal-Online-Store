package com.neon1024.backend.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.apache.catalina.connector.Request;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.neon1024.backend.services.ImagesService;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/images")
public class ImagesController {
    private ImagesService imagesService;

    public ImagesController(ImagesService imagesService) {
        this.imagesService = imagesService;
    }

    // TODO rename methods

    @GetMapping
    public ResponseEntity<List<String>> getImages() {
        List<String> fetchedImages = this.imagesService.getAllImages();
        return ResponseEntity.status(200).body(fetchedImages);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Void> postImages(@RequestParam("images") MultipartFile[] images, @PathVariable("id") String productId) {
        // TODO: handle Cloudinary upload here
        for (MultipartFile image : images) {
            this.imagesService.uploadImage(image);            
        }

        return ResponseEntity.status(201).build();
    }
}
