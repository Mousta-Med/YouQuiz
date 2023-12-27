package com.springboot.youquiz.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "quizzes")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "successResult", nullable = false)
    private Integer successResult;

    @Column(name = "answersAccess", nullable = false)
    private Boolean answersAccess;

    @Column(name = "resultAccessAfterTest", nullable = false)
    private Boolean resultAccessAfterTest;

    @Column(name = "chances", nullable = false)
    private Integer chancesNum;

    @Column(name = "comments", nullable = false)
    private String comment;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @OneToMany(mappedBy = "quiz", fetch = FetchType.LAZY)
    private List<AssignQuiz> assignQuizes;

    @OneToMany(mappedBy = "quiz", fetch = FetchType.LAZY)
    private List<TempQuestion> tempQuestions;

}
