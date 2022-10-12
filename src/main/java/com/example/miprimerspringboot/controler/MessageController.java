package com.example.miprimerspringboot.controler;


import com.example.miprimerspringboot.entidades.Message;
import com.example.miprimerspringboot.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Message")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping ("/all")
    private List<Message> getAll(){
        return messageService.getAll();
    }

    @PostMapping ("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Message save(@RequestBody Message m){
        return messageService.save(m);
    }

    public Optional<Message> getMessage(@PathVariable ("id")int messageId){
        return messageService.getById(messageId);
    }
}
