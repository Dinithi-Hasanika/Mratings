package com.example.demo.services;

import com.example.demo.entity.Space;
import com.example.demo.repository.SpaceRepository;
import com.example.demo.util.UserIdGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpaceServicesImpl implements SpaceServices{
    @Autowired
    private SpaceRepository spaceRepository;

    @Override
    public List<Space> getSpaces() {

        return spaceRepository.findAll();
    }

    @Override
    public Space getSpace(String id) {

        return spaceRepository.findById(id).orElse(null);
    }

    @Override
    public Space addSpace(Space space) {
        space.setId(new UserIdGenerator().generateId());
        return spaceRepository.save(space);
    }

    @Override
    public void deleteSpace(String id) {

        spaceRepository.deleteById(id);
    }

    @Override
    public Space updateSpace(Space space) {

        return null;
    }

    @Override
    public List<Space> addSpaces(List<Space> spaces) {

        spaces.forEach(space -> space.setId(new UserIdGenerator().generateId()));
        return spaceRepository.saveAll(spaces);
    }
}
