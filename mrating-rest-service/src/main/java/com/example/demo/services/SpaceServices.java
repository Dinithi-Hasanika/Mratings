package com.example.demo.services;

import com.example.demo.entity.Space;

import java.util.List;

public interface SpaceServices {

    List<Space> getSpaces();

    Space getSpace(String id);

    Space addSpace(Space space);

    void deleteSpace(String id);

    Space updateSpace(Space space);

    List<Space> addSpaces(List<Space> spaces);

}
