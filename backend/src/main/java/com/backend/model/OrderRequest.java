package com.backend.model;

import com.backend.entity.Product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class OrderRequest {
    private String city;
    private String address;
    private String zip;
    private String email;
    private String phone;
    private String paymentMethod;
    private Product[] products;
}
