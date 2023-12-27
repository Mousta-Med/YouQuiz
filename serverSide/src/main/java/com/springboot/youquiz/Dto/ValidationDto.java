package com.springboot.youquiz.Dto;

import lombok.Data;

@Data
public class ValidationDto {

    private Long id;

    private Double points;

    private Long questionId;

    private Long responseId;

}
