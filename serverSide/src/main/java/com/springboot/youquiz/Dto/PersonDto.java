package com.springboot.youquiz.Dto;

import jakarta.persistence.MappedSuperclass;
import lombok.Data;

import java.time.LocalDate;

@Data
@MappedSuperclass
public abstract class PersonDto {

    protected Long id;

    protected String lastName;

    protected String firstName;

    protected LocalDate dateOfBirth;

    protected String address;
}
