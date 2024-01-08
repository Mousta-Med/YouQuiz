package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.AssignQuizDto;
import com.springboot.youquiz.Dto.ValidationDto;
import com.springboot.youquiz.Model.Validation;
import lombok.Data;

@Data
public class AnswerRespDto {

    private Long id;

    private Integer played;

    private ValidationDto validation;

    private AssignQuizDto assignQuiz;
}
