package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.QuestionDto;
import com.springboot.youquiz.Dto.QuizDto;
import lombok.Data;

@Data
public class TempQuestionRespDto {

    private Long id;

    private Integer time;

    private QuestionDto question;

    private QuizDto quiz;
}
