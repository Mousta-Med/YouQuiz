package com.springboot.youquiz.Model;

import com.springboot.youquiz.Enum.QuestionType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "questionText", nullable = false)
    @NotBlank(message = "question content should not be empty")
    private String questionText;

    @Column(name = "numberOfAnswers")
    private Integer numberOfAnswers;

    @Column(name = "numberOfCorrectAnswers")
    private Integer numberOfCorrectAnswers;

    @Column(name = "questionType")
    @Enumerated(EnumType.STRING)
    private QuestionType questionType;

    @Column(name = "numberOfPoints")
    private Integer numberOfPoints;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "level_id")
    private Level level;

    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    private List<Media> medias;

    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    private List<Validation> validations;

    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    private List<TempQuestion> tempQuestions;
}
