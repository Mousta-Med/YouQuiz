package com.springboot.youquiz.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "students")
public final class Student extends Person {

    @Column(name = "registrationDate", nullable = false)
    private LocalDate registrationDate;

    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY)
    private List<AssignQuiz> assignQuizzes;
}
