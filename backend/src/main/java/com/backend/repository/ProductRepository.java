package com.backend.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.backend.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    List<Product> findByCategoryId(String id);

    Optional<Product> findById(String id);

    List<Product> findAllById(Iterable<String> ids);

    List<Product> findByNameContaining(String name);

    @Modifying
    @Query("UPDATE Product SET numberAvailable = ?2 WHERE id = ?1")
    void updateNumberAvailableById(String id, int numberAvailable);
}
