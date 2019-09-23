package com.tts.dashboard.repository;

import com.tts.dashboard.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Order by sale's discount ASC
   @Query(value = "SELECT * FROM products p ORDER BY 1 - p.sale_price / p.full_price ASC", nativeQuery = true)
   Page<Product> findAllAndOrderByDiscountAsc(Pageable pageable);

    // Order by sale's discount DESC
    @Query(value = "SELECT * FROM products p ORDER BY 1 - p.sale_price / p.full_price DESC", nativeQuery = true)
    Page<Product> findAllAndOrderByDiscountDesc(Pageable pageable);

}
