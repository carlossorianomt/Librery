package com.example.miprimerspringboot.Repository;

import com.example.miprimerspringboot.Repository.CRUDRepository.LibraryCRUDRepository;
import com.example.miprimerspringboot.entidades.Library;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class LibraryRepository {

    @Autowired
    private LibraryCRUDRepository libraryCRUDRepository;

    public List<Library> getAll(){
        return (List<Library>) libraryCRUDRepository.findAll();
    }
    public Optional<Library> getById(int id){

        return libraryCRUDRepository.findById(id);
    }
    public Library save(Library l){
        return libraryCRUDRepository.save(l);
    }

    public void delete(Library l) {
        libraryCRUDRepository.delete(l);
    }

}
