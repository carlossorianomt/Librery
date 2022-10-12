package com.example.miprimerspringboot.Repository.CRUDRepository;

import com.example.miprimerspringboot.entidades.Category;
import com.example.miprimerspringboot.entidades.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientCRUDRepository extends CrudRepository<Client,Integer>  {
}
