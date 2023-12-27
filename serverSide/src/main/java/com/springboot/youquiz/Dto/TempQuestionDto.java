package com.springboot.youquiz.Dto;

import lombok.Data;

@Data
public class TempQuestionDto {

    private Long id;

    private Integer time;

    private Long questionId;

    private Long quizId;
}
