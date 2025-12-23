package com.neon1024.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Service
public class ImagesService {
    private Cloudinary cloudinary;

    public ImagesService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    // TODO get all images from Cloudinary
    public List<String> getAllImages() {
        // TODO fetch all the images URLs from the DB
        // TODO call the Cloudinary API with those URLs in order to get all the images
    }

    // TODO upload an image to Cloudinary
    public String uploadImage(MultipartFile image) {
        try {
            Map uploadResult = this.cloudinary.uploader().upload(
                image.getBytes(),
                ObjectUtils.asMap(
                    "folder", "Products/Images",
                    "resource_type", "image"
                ));

            // TODO add to Images with public_id (in order to delete later)
            String publicId = uploadResult.get("public_id").toString();

            return uploadResult.get("secure_url").toString();
        } catch(Exception e) {
            throw new RuntimeException("Image uploading failed", e);
        }
    }
}
