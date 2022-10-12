package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.Repository.ReservationRepository;
import com.example.miprimerspringboot.entidades.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }

    public Reservation save(Reservation r){
        return reservationRepository.save(r);
    }

    public List<Reservation> getReservationsPeriod(String d1, String d2){

        SimpleDateFormat parser=new SimpleDateFormat("yyyy-MM-dd");

        Date date1=new Date();
        Date date2=new Date();

        try{
            date1=parser.parse(d1);
            date2=parser.parse(d2);
        }catch (ParseException e){
            System.out.println("Error con las fechas!");
            return new ArrayList<Reservation>();
        }

        if(date1.before(date2) || date1.equals(date2)){
            return reservationRepository.getReservationPeriod(date1,date2);
        }else{
            return new ArrayList<Reservation>();
        }

    }

}
