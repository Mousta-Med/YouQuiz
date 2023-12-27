package com.springboot.youquiz.Dto;


import lombok.Data;

import java.time.LocalDate;

@Data
public class AssignQuizDto {

    private Long id;

    private Integer score;

    private Integer chanceNumber;

    private String notes;

    private LocalDate date;

    private Long quizId;

    private Long studentId;

}
