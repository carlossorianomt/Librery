package com.example.miprimerspringboot.Repository;


import com.example.miprimerspringboot.Repository.CRUDRepository.MessageCRUDRepository;
import com.example.miprimerspringboot.entidades.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class MessageRepository {

    @Autowired
    private MessageCRUDRepository messageCRUDRepository;

    public List<Message> getAll(){
        return (List<Message>) messageCRUDRepository.findAll();

    }
    public Message save (Message m) {
        return messageCRUDRepository.save(m);
    }

    public Optional<Message> getById(int idmessage){
        return messageCRUDRepository.findById(idmessage);
    }
}
