package com.example.miprimerspringboot.Repository.CRUDRepository;

import com.example.miprimerspringboot.entidades.Reservation;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface ReservationCRUDRepository extends CrudRepository<Reservation,Integer>  {

   public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date dateOne, Date dateTwo);
}
