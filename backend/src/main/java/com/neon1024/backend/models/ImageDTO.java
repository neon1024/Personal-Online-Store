package com.neon1024.backend.models;

import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import java.util.UUID;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class ImageDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @NotNull
    private UUID productId;
    @NotNull
    private String publicId;
    @NotNull
    private String url;
    @NotNull
    @Min(value = 0)
    @Max(value = 7)
    private Integer position;

    public ImageDTO() {}

    public ImageDTO(UUID id, UUID productId, String publicId, String url, Integer position) {
        this.id = id;
        this.productId = productId;
        this.publicId = publicId;
        this.url = url;
        this.position = position;
    }
}
