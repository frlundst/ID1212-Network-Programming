package com.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AddCategoryRequest {
    private String name;
    private String description;
    private String parentName;
}
