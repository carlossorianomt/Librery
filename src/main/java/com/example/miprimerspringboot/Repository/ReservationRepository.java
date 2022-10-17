package com.example.miprimerspringboot.Repository;


import com.example.miprimerspringboot.Repository.CRUDRepository.ReservationCRUDRepository;
import com.example.miprimerspringboot.entidades.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {

    @Autowired
    private ReservationCRUDRepository reservationCRUDRepository;

    public List<Reservation> getAll(){
        return (List<Reservation>) reservationCRUDRepository.findAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationCRUDRepository.findById(id);
    }
    public Optional<Reservation> getById(int id){
        return reservationCRUDRepository .findById(id);
    }

    public Reservation save(Reservation r){
        return reservationCRUDRepository.save(r);
    }

    public void delete(Reservation c){
        reservationCRUDRepository.delete(c);
    }

    public List<Reservation> getDatesReport(Date inicio,Date fin){
        return reservationCRUDRepository.findAllByStartDateAfterAndStartDateBefore(inicio,fin);
    }

    public List<Reservation> getStatusReport(String sts){
        return reservationCRUDRepository.findAllByStatus(sts);
    }

    public List<Object[]> getTopClients(){
        return reservationCRUDRepository.getTopClients();
    }






    //public List<Reservation> getReservationPeriod(Date date1, Date date2) {
    //    return reservationCRUDRepository.findAllByStartDateAfterAndStartDateBefore(date1,date2);

}
