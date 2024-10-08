package com.leave.backend.Entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class CalendarEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     private int id;

  
    private Date date;

  
    private String description;


    

}
