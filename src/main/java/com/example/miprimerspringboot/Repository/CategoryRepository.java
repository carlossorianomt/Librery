package com.example.miprimerspringboot.Repository;


import com.example.miprimerspringboot.Repository.CRUDRepository.CategoryCRUDRepository;
import com.example.miprimerspringboot.entidades.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CategoryRepository {

    @Autowired
    private CategoryCRUDRepository categoryCRUDRepository;

    public List<Category> getAll(){
        return (List<Category>) categoryCRUDRepository.findAll();

    }
    public Category save (Category c) {
        return categoryCRUDRepository.save(c);
    }

    public Optional<Category> getById(int id){
        return categoryCRUDRepository.findById(id);
    }

}
