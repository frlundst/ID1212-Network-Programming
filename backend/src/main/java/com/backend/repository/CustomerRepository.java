package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
    public Customer save(Customer customer);
    public Customer findByEmail(String email);
}
