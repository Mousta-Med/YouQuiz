package com.springboot.youquiz.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name = "teachers")
public final class Teacher extends Person {

    @Column(name = "specialty", nullable = false)
    private String specialty;

    @OneToMany(mappedBy = "teacher", fetch = FetchType.LAZY)
    private List<Quiz> quizzes;
}
