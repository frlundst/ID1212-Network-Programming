package com.backend.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "category")
public class Category {

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

    public Category(String name, Category parent) {
        this.name = name;
        this.parent = parent;
    }
     
    public Category(String name) {
        this.name = name;
    }  
 
    public Category() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getParent_id() {
        return parent_id;
    }

    public void setParent_id(String parentId) {
        this.parent_id = parentId;
    }

    public Category getParent() {
        return parent;
    }

    public void setParent(Category parent) {
        this.parent = parent;
    }

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
