package com.example.miprimerspringboot.controler;

import com.example.miprimerspringboot.entidades.Library;
import com.example.miprimerspringboot.services.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Lib")
public class LibraryController {

    @Autowired
    private LibraryService libraryService;

    @GetMapping("/all")
    public List<Library> getAll(){
        return libraryService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Library> getById(@PathVariable("id") int id){
        return libraryService.getById(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Library save(@RequestBody Library l){
        return libraryService.save(l);
    }

}
