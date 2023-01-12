package com.backend.entity;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @Column(name = "user_id")
    private String userId;

    // @OneToMany
    // @JoinColumn(name = "category_id")
    // private List<SubCategory> subCategories;

    public Order(String userId) {
        this.userId = userId;
    }
     
   
}