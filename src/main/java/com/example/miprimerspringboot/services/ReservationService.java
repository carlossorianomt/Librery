package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.Repository.ReservationRepository;
import com.example.miprimerspringboot.entidades.Category;
import com.example.miprimerspringboot.entidades.Client;
import com.example.miprimerspringboot.entidades.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int reservationId) {
        return reservationRepository.getReservation(reservationId);
    }

    public Reservation save(Reservation r){   return reservationRepository.save(r); }

    public boolean deleteReservation (int id){
        Boolean d = getReservation(id).map(reservation -> {
            reservationRepository.delete(reservation);
            return true;
        }).orElse(false);
        return d;
    }



}
