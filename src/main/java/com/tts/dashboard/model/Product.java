package com.tts.dashboard.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @ManyToOne(optional=false)
    @JoinColumn(name = "category")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Category category;

    @NotNull
    private BigDecimal fullPrice;
    @NotNull
    private BigDecimal salePrice;

    @Column(nullable = false, columnDefinition = "BOOLEAN")
    private boolean availability;

    @ManyToOne(optional = false)
    @JoinColumn(name = "supplier")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Supplier supplier;

    public Product() {}

    public Product(String name, Category category, @NotNull BigDecimal fullPrice, @NotNull BigDecimal salePrice, boolean availability, Supplier supplier) {
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
