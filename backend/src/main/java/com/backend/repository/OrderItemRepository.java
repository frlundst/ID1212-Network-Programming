package com.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.entity.CustomerOrderItem;

@Repository
public interface OrderItemRepository extends JpaRepository<CustomerOrderItem, String> {
    public CustomerOrderItem save(CustomerOrderItem orderItem);
    public List<CustomerOrderItem> findAllByCustomerOrderId(String customerOrderId);
}
