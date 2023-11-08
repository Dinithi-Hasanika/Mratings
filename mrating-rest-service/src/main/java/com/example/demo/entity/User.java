package com.example.demo.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    private String id;

    @Column(name="username", unique = true)
    private String userName;

    @Column(name="firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "users_spaces", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "space_id", referencedColumnName = "id"))
    private List<Space> userSpaces;

    public String getId() {

        return id;
    }

    public void setId(String id) {

        this.id = id;
    }

    public String getUserName() {

        return userName;
    }

    public void setUserName(String userName) {

        this.userName = userName;
    }

    public String getFirstName() {

        return firstName;
    }

    public void setFirstName(String firstName) {

        this.firstName = firstName;
    }

    public String getLastName() {

        return lastName;
    }

    public void setLastName(String lastName) {

        this.lastName = lastName;
    }

    public List<Space> getUserSpaces() {

        return userSpaces;
    }

    public void setUserSpaces(List<Space> userSpaces) {

        this.userSpaces = userSpaces;
    }
}
