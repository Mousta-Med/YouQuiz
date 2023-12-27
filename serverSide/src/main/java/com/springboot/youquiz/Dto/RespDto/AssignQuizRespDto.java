package com.springboot.youquiz.Dto.RespDto;


import com.springboot.youquiz.Dto.AnswerDto;
import com.springboot.youquiz.Dto.QuizDto;
import com.springboot.youquiz.Dto.StudentDto;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class AssignQuizRespDto {

    private Long id;

    private Integer score;

    private Integer chanceNumber;

    private String notes;

    private LocalDate date;

    private QuizDto quiz;

    private StudentDto student;

    private List<AnswerDto> answers;
}
