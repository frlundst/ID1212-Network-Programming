package com.backend.entity;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private double price;

    @Column(name = "old_price")
    private double oldprice;

    @Column(name = "number_available")
    private int numberAvailable;
    
    @Column(name = "image_pathname")
    private String imagePathname;

    @Column(name = "category_id", insertable=false, updatable=false)
    private String categoryId;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
 
    public Product() {
    }
}
