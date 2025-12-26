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

import java.util.Optional;

@Service
@Transactional
public class ImagesService {
    private ImagesRepository imagesRepository;
    // TODO Singleton?
    private ProductsRepository productsRepository;
    private Cloudinary cloudinary;

    public ImagesService(ImagesRepository imagesRepository, ProductsRepository productsRepository, Cloudinary cloudinary) {
        this.imagesRepository = imagesRepository;
        this.productsRepository = productsRepository;
        this.cloudinary = cloudinary;
    }

    public List<ImageDTO> getAllImagesOfProductByProductId(UUID id) {
        if(!this.productsRepository.existsById(id)) {
            throw new RuntimeException("Product doesn't exist");
        }

        List<Image> images = this.imagesRepository.findAllImagesByProductId(id);

        List<ImageDTO> imagesDTOs = images.stream()
            .map(
                image -> new ImageDTO(
                    image.getId(),
                    id,
                    image.getPublicId(),
                    image.getUrl(),
                    image.getPosition()
                )
            ).toList();
        
        return imagesDTOs;
    }

    public Image uploadOneImageForProductByProductId(MultipartFile image, UUID productId, Integer position) {
        if(!this.productsRepository.existsById(productId)) {
            throw new RuntimeException("Product doesn't exist");
        }

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

            Image imageToSave = new Image(product, publicId, url, position);

            this.imagesRepository.save(imageToSave);

            return imageToSave;

        } catch(Exception e) {
            throw new RuntimeException("Failed to upload image", e);
        }
    }

    public Integer uploadAllImagesForProductByProductId(MultipartFile[] images, UUID id) {
        if(!this.productsRepository.existsById(id)) {
            throw new RuntimeException("Product doesn't exist");
        }

        Integer uploadedImagesCount = 0;
        Integer position = 0;
        final Integer POSITION_LIMIT = 8;

        Product product = this.productsRepository.getReferenceById(id);

        for(MultipartFile image : images) {
            try {
                Map uploadResult = this.cloudinary.uploader().upload(
                    image.getBytes(),
                    ObjectUtils.asMap(
                        "folder", "Products/Images",
                        "resource_type", "image"
                    ));

                String publicId = uploadResult.get("public_id").toString();

                String url = uploadResult.get("secure_url").toString();

                Image imageToSave = new Image(product, publicId, url, position);

                position = (position + 1) % POSITION_LIMIT;

                this.imagesRepository.save(imageToSave);

                uploadedImagesCount++;

            } catch(Exception e) {
                throw new RuntimeException("Failed to upload an image", e);
            }
        }

        return uploadedImagesCount;
    }

    public Integer deleteImagesByProductId(UUID id) {
        Integer deletedImagesCount = 0;

        // TODO

        return deletedImagesCount;
    }
}
