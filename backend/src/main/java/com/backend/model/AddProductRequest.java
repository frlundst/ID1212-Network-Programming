package com.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AddProductRequest {
    private String name;
    private String description;
    private String imagePathname;
    private int price;
    private int oldPrice;
    private int numberAvailable;
    private String categoryName;
}
