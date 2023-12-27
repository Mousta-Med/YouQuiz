package com.springboot.youquiz.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@MappedSuperclass
@Table(name = "persons")
public abstract class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Column(name = "lastName", nullable = false)
    protected String lastName;

    @Column(name = "firstName", nullable = false)
    protected String firstName;

    @Column(name = "dateOfBirth", nullable = false)
    protected LocalDate dateOfBirth;

    @Column(name = "address", nullable = false)
    protected String address;
}
