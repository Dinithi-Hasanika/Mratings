package com.example.demo.controller;

import com.example.demo.commons.CommonResponse;
import com.example.demo.entity.Space;
import com.example.demo.services.SpaceServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/space")
    public ResponseEntity<Space> addSpace(@RequestBody Space space) {
        return ResponseEntity.ok(spaceServices.addSpace(space));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/space/{space_id}")
    public ResponseEntity<Space> getSpace(@PathVariable String space_id) {
        return ResponseEntity.ok(spaceServices.getSpace(space_id));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/space/{space_id}")
    public ResponseEntity<CommonResponse> deleteSpace(@PathVariable String space_id) {
        spaceServices.deleteSpace(space_id);
        return ResponseEntity.ok(new CommonResponse("Successful", "Space deletion successful"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/spaces")
    public ResponseEntity<List<Space>> addSpaces(@RequestBody List<Space> spaces) {
        return ResponseEntity.ok(spaceServices.addSpaces(spaces));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PatchMapping("/space")
    public ResponseEntity<Space> editSpace(@RequestBody Space space) {
       return ResponseEntity.ok(spaceServices.updateSpace(space));
    }
}
