package com.tts.dashboard.repository;

import com.tts.dashboard.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Order by sale's discount ASC
    @Query(value = "SELECT * FROM products p ORDER BY 1 - p.sale_price / p.full_price ASC", nativeQuery = true)
    Page<Product> findAllAndOrderByDiscountAsc(Pageable pageable);

    // Order by sale's discount DESC
    @Query(value = "SELECT * FROM products p ORDER BY 1 - p.sale_price / p.full_price DESC", nativeQuery = true)
    Page<Product> findAllAndOrderByDiscountDesc(Pageable pageable);

    // FIND ALL available products and ORDER by sale's discount ASC
    @Query(value = "SELECT * FROM products p WHERE p.availability = true ORDER BY 1 - p.sale_price / p.full_price ASC", nativeQuery = true)
    Page<Product> findAllAvailableProductsAndOrderByDiscountAsc(Pageable pageable);

    // FIND ALL available products and ORDER by sale's discount DESC
    @Query(value = "SELECT * FROM products p WHERE p.availability = true ORDER BY 1 - p.sale_price / p.full_price DESC", nativeQuery = true)
    Page<Product> findAllAvailableProductsAndOrderByDiscountDesc(Pageable pageable);

    // FIND ALL products that are NOT available and ORDER by sale's discount ASC
    @Query(value = "SELECT * FROM products p WHERE p.availability = false ORDER BY 1 - p.sale_price / p.full_price ASC", nativeQuery = true)
    Page<Product> findAllProductsNotAvailableAndOrderByDiscountAsc(Pageable pageable);

    // FIND ALL products that are NOT available and ORDER by sale's discount DESC
    @Query(value = "SELECT * FROM products p WHERE p.availability = false ORDER BY 1 - p.sale_price / p.full_price DESC", nativeQuery = true)
    Page<Product> findAllProductsNotAvailableAndOrderByDiscountDesc(Pageable pageable);

    Page<Product> findByAvailabilityEquals(boolean isAvailable, Pageable pageable);

    List<Product> findByCategoryId(long id);

    Page<Product> findByCategoryId(long id, Pageable pageable);

    Page<Product> findByCategoryIdAndAvailabilityEquals(long categoryId, boolean isAvailable, Pageable pageable);

    List<Product> findByCategoryIdAndAvailabilityEquals(long categoryId, boolean isAvailable);

    List<Product> findBySupplierId(long id);

    Page<Product> findBySupplierId(long id, Pageable pageable);

    Page<Product> findBySupplierIdAndAvailabilityEquals(long categoryId, boolean isAvailable, Pageable pageable);

    List<Product> findBySupplierIdAndAvailabilityEquals(long categoryId, boolean isAvailable);

    Optional<Product> findByName(String name);
}