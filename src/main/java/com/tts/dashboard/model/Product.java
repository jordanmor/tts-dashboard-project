package com.tts.dashboard.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String name;

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

    public Product(@NotNull String name, @NotNull Category category, @NotNull BigDecimal fullPrice, @NotNull BigDecimal salePrice, boolean availability, @NotNull Supplier supplier) {
        this.name = name;
        this.category = category;
        this.fullPrice = fullPrice;
        this.salePrice = salePrice;
        this.availability = availability;
        this.supplier = supplier;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
                "id=" + id +
                ", name='" + name + '\'' +
                ", category=" + category +
                ", fullPrice=" + fullPrice +
                ", salePrice=" + salePrice +
                ", availability=" + availability +
                ", supplier=" + supplier +
                '}';
    }
}
