package com.example.miprimerspringboot.Repository.CRUDRepository;

import com.example.miprimerspringboot.entidades.Message;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface MessageCRUDRepository extends CrudRepository<Message,Integer>  {


}
