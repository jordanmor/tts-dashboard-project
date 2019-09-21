package com.tts.dashboard.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
@Table(name="suppliers")
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long supplierId;

    @NotNull
    private String supplierName;

    public Supplier(@NotNull String supplierName) {
        this.supplierName = supplierName;
    }

    public Supplier() {}

    public long getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(long supplierId) {
        this.supplierId = supplierId;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    @Override
    public String toString() {
        return "Supplier{" +
                "supplierId=" + supplierId +
                ", supplierName='" + supplierName + '\'' +
                '}';
    }
}
