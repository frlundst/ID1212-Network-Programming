package com.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.entity.CustomerOrder;

@Repository
public interface OrderRepository extends JpaRepository<CustomerOrder, String> {
    public CustomerOrder save(CustomerOrder order);
    public List<CustomerOrder> findAllByCustomerId(String customerId);
}
