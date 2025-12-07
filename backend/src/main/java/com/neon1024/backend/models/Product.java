package com.neon1024.backend.models;

import java.math.BigDecimal;
import java.util.UUID;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @NotNull
    @Size(max = 128)
    private String name;
    @Size(max = 64)
    private String category;
    @Size(max = 2048)
    private String description;
    @Min(value = 0)
    @Digits(integer = 10, fraction = 2)
    private BigDecimal price;
    @Pattern(regexp = "(?i)RON|EUR", message = "Currency must be RON or EUR")
    private String currency;
    @Min(value = 0)
    private Integer quantity;
    @Min(value = 0)
    @Digits(integer = 10, fraction = 2)
    private BigDecimal weight;
    @Pattern(regexp = "(?i)g|kg|ml|l", message = "Unit must be one of g, kg, ml, l")
    private String unit;

    public Product() {}

    public Product(String name, String category, String description, BigDecimal price, String currency, Integer quantity, BigDecimal weight, String unit) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.currency = currency;
        this.quantity = quantity;
        this.weight = weight;
        this.unit = unit;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID newId) {
        this.id = newId;
    }

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        this.name = newName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String newCategory) {
        this.category = newCategory;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String newDescription) {
        this.description = newDescription;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal newPrice) {
        this.price = newPrice;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String newCurrency) {
        this.currency = newCurrency;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer newQuantity) {
        this.quantity = newQuantity;
    }

    public BigDecimal getWeight() {
        return weight;
    }

    public void setWeight(BigDecimal newWeight) {
        this.weight = newWeight;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String newUnit) {
        this.unit = newUnit;
    }
}
