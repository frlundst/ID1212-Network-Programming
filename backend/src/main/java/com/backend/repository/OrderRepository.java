package com.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
    public Order save(Order order);
    public List<Order> findAllByCustomerId(String customerId);
}
