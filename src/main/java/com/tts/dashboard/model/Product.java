package com.tts.dashboard.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

    @NotNull
    private BigDecimal fullPrice;
    
    @NotNull
    private BigDecimal salePrice;

    @ManyToOne(optional=false)
    @JoinColumn(name = "category")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "supplier")
    @JsonIgnoreProperties("products")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Supplier supplier;

    @Column(nullable = false, columnDefinition = "BOOLEAN")
    private boolean availability;

    public Product() {}

    public Product(String name, @NotNull BigDecimal fullPrice, @NotNull BigDecimal salePrice, Category category, Supplier supplier, boolean availability) {
        this.name = name;
        this.fullPrice = fullPrice;
        this.salePrice = salePrice;
        this.category = category;
        this.supplier = supplier;
        this.availability = availability;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", fullPrice=" + fullPrice +
                ", salePrice=" + salePrice +
                ", category=" + category +
                ", supplier=" + supplier +
                ", availability=" + availability +
                '}';
    }
}
