package com.backend.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.backend.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, String> {
    List<Category> findAll();

    Optional<Category> findById(String id);

    List<Category> findAllById(Iterable<String> ids);

    List<Category> findByNameContaining(String name);

    @Modifying
    @Query("INSERT INTO Category (name, description, parent_id) VALUES (?1, ?2, (SELECT id FROM Category WHERE name = ?3))")
    void saveWithParent(String name, String description, String parentName);

    @Modifying
    @Query("INSERT INTO Category (name, description, parent_id) VALUES (?1, ?2, NULL)")
    void saveWithoutParent(String name, String description);
}
