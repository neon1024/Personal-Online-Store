package com.neon1024.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.neon1024.backend.repositories.ImagesRepository;
import com.neon1024.backend.repositories.ProductsRepository;

import jakarta.transaction.Transactional;

import com.neon1024.backend.models.Product;
import com.neon1024.backend.models.Image;
import com.neon1024.backend.models.ImageDTO;

@Service
@Transactional
public class ImagesService {
    private ImagesRepository imagesRepository;
    // TODO Singleton?
    private ProductsRepository productsRepository;
    private Cloudinary cloudinary;
    private Integer position;
    private final Integer POSITION_LIMIT;

    public ImagesService(ImagesRepository imagesRepository, ProductsRepository productsRepository, Cloudinary cloudinary) {
        this.imagesRepository = imagesRepository;
        this.productsRepository = productsRepository;
        this.cloudinary = cloudinary;
        this.position = 0;
        this.POSITION_LIMIT = 8;
    }

    public List<ImageDTO> getAllImagesByProductId(UUID id) {
        List<Image> images = this.imagesRepository.findAllImagesByProductId(id);

        List<ImageDTO> imagesDTOs = images.stream().map(
            image -> new ImageDTO(
                image.getId(),
                id,
                image.getPublicId(),
                image.getUrl(),
                image.getPosition())).toList();
        
        return imagesDTOs;
    }

    // TODO upload an image to Cloudinary
    public Image uploadImage(MultipartFile image, UUID productId) {
        try {
            Map uploadResult = this.cloudinary.uploader().upload(
                image.getBytes(),
                ObjectUtils.asMap(
                    "folder", "Products/Images",
                    "resource_type", "image"
                ));

            Product product = this.productsRepository.getReferenceById(productId);

            String publicId = uploadResult.get("public_id").toString();

            String url = uploadResult.get("secure_url").toString();

            Integer position = this.position++ % this.POSITION_LIMIT;

            Image imageToSave = new Image(product, publicId, url, position);

            this.imagesRepository.save(imageToSave);

            return imageToSave;
        } catch(Exception e) {
            throw new RuntimeException("Image uploading failed", e);
        }
    }

    // TODO method for uploading multiple images at once, also set their position
}
