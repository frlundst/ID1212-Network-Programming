package com.backend.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @OneToOne
    @JoinColumn(name = "parent_id")
    @JsonBackReference
    private Category parent;
     
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Category> children;

    @Column(name = "parent_id", insertable = false, updatable = false)
    private String parent_id;

    //@OneToMany(mappedBy = "category")
    //private List<SubCategory> subCategories;

    //@OneToMany
    //@JoinColumn(name = "category_id")
    //private List<SubCategory> subCategories;



    public List<Category> getChildren() {
        return children;
    }

    public void setChildren(List<Category> children) {
        this.children = children;
    }

    public void addChild(Category children) {
        this.children.add(children);
    }
}

