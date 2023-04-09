package com.example.demo.controller;

import com.example.demo.entity.Space;
import com.example.demo.entity.User;
import com.example.demo.exceptions.APIException;
import com.example.demo.services.SpaceServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class SpaceRestController {

    @Autowired
    private SpaceServices spaceServices;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/spaces")
    public ResponseEntity<List<Space>> getAllSpaces(){
        return ResponseEntity.ok(spaceServices.getSpaces());
    }

    @PostMapping("/space")
    public ResponseEntity<Space> addSpace(@RequestBody Space space)  {
        return ResponseEntity.ok(spaceServices.addSpace(space));
    }
}
