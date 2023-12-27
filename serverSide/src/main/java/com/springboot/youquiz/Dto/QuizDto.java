package com.springboot.youquiz.Dto;

import lombok.Data;


@Data
public class QuizDto {
    private Long id;

    private Integer successResult;

    private Boolean answersAccess;

    private Boolean resultAccessAfterTest;

    private Integer chancesNum;

    private String comment;

    private Long teacherId;

}
