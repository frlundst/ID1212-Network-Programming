package com.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AddProductSaleRequest {
    private String name;
    private int discount;
}
