package com.tts.dashboard.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    @NotNull
    private String productName;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "category")
    private Category category;

    @NotNull
    private BigDecimal fullPrice;
    @NotNull
    private BigDecimal salePrice;

    @Column(nullable = false, columnDefinition = "BOOLEAN")
    private boolean availability;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "supplier")
    private Supplier supplier;

    public Product() {}

    public Product(@NotNull String productName, @NotNull Category category, @NotNull BigDecimal fullPrice, @NotNull BigDecimal salePrice, boolean availability, @NotNull Supplier supplier) {
        this.productName = productName;
        this.category = category;
        this.fullPrice = fullPrice;
        this.salePrice = salePrice;
        this.availability = availability;
        this.supplier = supplier;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public BigDecimal getFullPrice() {
        return fullPrice;
    }

    public void setFullPrice(BigDecimal fullPrice) {
        this.fullPrice = fullPrice;
    }

    public BigDecimal getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(BigDecimal salePrice) {
        this.salePrice = salePrice;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", category=" + category +
                ", fullPrice=" + fullPrice +
                ", salePrice=" + salePrice +
                ", availability=" + availability +
                ", supplier=" + supplier +
                '}';
    }
}
