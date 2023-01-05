package com.backend.extendedEntity;

import com.backend.entity.Product;

public class ProductWithCount extends Product {
    private int count;

    public void setCount(int count) {
        this.count = count;
    }

    public int getCount() {
        return count;
    }
}
