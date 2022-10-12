package com.example.miprimerspringboot.Repository;


import com.example.miprimerspringboot.Repository.CRUDRepository.ClientCRUDRepository;
import com.example.miprimerspringboot.entidades.Category;
import com.example.miprimerspringboot.entidades.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ClientRepository {

    @Autowired
    private ClientCRUDRepository clientCRUDRepository;

    public List<Client> getAll(){
        return (List<Client>) clientCRUDRepository.findAll();

    }
    public Client save (Client c) {
        return clientCRUDRepository.save(c);
    }

    public Optional<Client> getById(int id){
        return clientCRUDRepository.findById(id);
    }

}
