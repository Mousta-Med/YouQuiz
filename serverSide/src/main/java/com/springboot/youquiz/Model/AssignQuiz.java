package com.springboot.youquiz.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "assignQuizzes")
public class AssignQuiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "score", nullable = false)
    private Integer score;

    @Column(name = "chanceNumber", nullable = false)
    private Integer chanceNumber;

    @Column(name = "notes", nullable = false)
    private String notes;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "student_id")
    private Student student;

    @OneToMany(mappedBy = "assignQuiz", fetch = FetchType.LAZY)
    private List<Answer> answers;

}
