package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.Repository.MessageRepository;
import com.example.miprimerspringboot.entidades.Category;
import com.example.miprimerspringboot.entidades.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll(){
        return messageRepository.getAll();
    }

    public Message save(Message m){
        return messageRepository.save(m);
    }
    public Optional<Message> getById(int id){
        return messageRepository.getById(id);
    }

    public boolean delete(int id) {
        Optional<Message> cOp = messageRepository.getById(id);
        if (cOp.isPresent()) {
            messageRepository.delete(cOp.get());
            return true;
        }
        return false;
    }
}
