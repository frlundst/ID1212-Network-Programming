package com.backend.entity;

import java.util.List;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "date")
    private String date;

    @Column(name = "city")
    private String city;

    @Column(name = "address")
    private String address;

    @Column(name = "zip")
    private String zip;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "payed")
    private boolean payed;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<OrderItem> orderItems;

    public Order(String userId) {
        this.userId = userId;
    }

    public Order() {
    }
}
