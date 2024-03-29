package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "spaces")
public class Space {

    @Id
    private String id;

    @Column(name="space_name", unique = true)
    private String spaceName;

    @Column(name = "origin")
    private String origin;

    @Column(name = "movies")
    private Long movies;

    @Column(name = "followers")
    private Long followers;

    @Column(name = "description")
    private String description;

    public String getId() {

        return id;
    }

    public void setId(String id) {

        this.id = id;
    }

    public String getSpaceName() {

        return spaceName;
    }

    public void setSpaceName(String spaceName) {

        this.spaceName = spaceName;
    }

    public String getOrigin() {

        return origin;
    }

    public void setOrigin(String origin) {

        this.origin = origin;
    }

    public Long getMovies() {

        return movies;
    }

    public void setMovies(Long movies) {

        this.movies = movies;
    }

    public Long getFollowers() {

        return followers;
    }

    public void setFollowers(Long followers) {

        this.followers = followers;
    }

    public String getDescription() {

        return description;
    }

    public void setDescription(String description) {

        this.description = description;
    }
}
