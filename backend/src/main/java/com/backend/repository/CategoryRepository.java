package com.backend.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.entity.Category;

@Qualifier("categories")
@Repository
public interface CategoryRepository extends JpaRepository<Category, String> {
    List<Category> findAll();
}
