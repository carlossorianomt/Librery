package com.example.miprimerspringboot.controler;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MiControler {

    @GetMapping("/g40")
    public String SaludarG40() {
        return "Hola G40";
    }

    @GetMapping("/g43")
    public String SaludarG43() {
        return "Hola G43";

    }

}
