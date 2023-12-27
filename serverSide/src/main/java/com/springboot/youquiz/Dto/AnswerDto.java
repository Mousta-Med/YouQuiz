package com.springboot.youquiz.Dto;

import lombok.Data;

@Data
public class AnswerDto {

    private Long id;

    private Integer played;

    private Long validationId;

    private Long assignQuizId;
}
