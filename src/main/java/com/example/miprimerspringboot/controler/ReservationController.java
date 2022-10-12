package com.example.miprimerspringboot.controler;


import com.example.miprimerspringboot.entidades.Reservation;
import com.example.miprimerspringboot.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/all")
    public List<Reservation>getAll(){
        return reservationService.getAll();
    }
    @PostMapping("/save")
    public Reservation save(@RequestBody Reservation r){
        return reservationService.save(r);
    }
    @GetMapping("/report/{d1}/{d2}")
    public List<Reservation> getReservationsPeriod(@PathVariable("d1") String d1, @PathVariable("d2") String d2){
        return reservationService.getReservationsPeriod(d1,d2);
    }

}
