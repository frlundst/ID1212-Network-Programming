package com.backend.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    List<Product> findByCategoryId(String id);

    Optional<Product> findById(String id);

    List<Product> findAllById(Iterable<String> ids);

    List<Product> findByNameContaining(String name);

    Optional<Product> updateNumberAvailableById(String id, int numberAvailable);
}
