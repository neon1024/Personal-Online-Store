package com.neon1024.backend.models;

import java.math.BigDecimal;
import java.util.UUID;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class ProductDTO {
    public UUID id;
    @Size(max = 128)
    public String name;
    @Size(max = 64)
    public String category;
    @Size(max = 2048)
    public String description;
    @Min(value = 0)
    @Digits(integer = 10, fraction = 2)
    public BigDecimal price;
    @Pattern(regexp = "(?i)RON|EUR", message = "Currency must be RON or EUR")
    public String currency;
    @Min(value = 0)
    public Integer quantity;
    @Min(value = 0)
    @Digits(integer = 10, fraction = 2)
    public BigDecimal weight;
    @Pattern(regexp = "(?i)g|kg|ml|l", message = "Unit must be one of g, kg, ml, l")
    public String unit;
    @Size(max = 512)
    public String imageUrl;

    public ProductDTO() {}
}
