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

import java.util.UUID;

import com.neon1024.backend.models.Image;
import com.neon1024.backend.models.ImageDTO;

import java.util.Map;

@RestController
@RequestMapping("/images")
public class ImagesController {
    private ImagesService imagesService;

    public ImagesController(ImagesService imagesService) {
        this.imagesService = imagesService;
    }

    // TODO rename methods

    @GetMapping("/{id}")
    public ResponseEntity<List<ImageDTO>> getImages(@PathVariable("id") UUID id) {
        List<ImageDTO> fetchedImagesDTOs = this.imagesService.getAllImagesByProductId(id);
        
        return ResponseEntity.status(200).body(fetchedImagesDTOs);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Map> postImages(@RequestParam("images") MultipartFile[] images, @PathVariable("id") UUID id) {
        List<Image> uploadedImages = new ArrayList<Image>();

        for (MultipartFile image : images) {
            uploadedImages.add(imagesService.uploadImage(image, id));            
        }

        return ResponseEntity.status(201).body(Map.of("OK", "Images upload successful"));
    }
}
