package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.AnswerDto;
import com.springboot.youquiz.Dto.QuestionDto;
import com.springboot.youquiz.Dto.ResponseDto;
import lombok.Data;

import java.util.List;

@Data
public class ValidationRespDto {

    private Long id;

    private Double points;

    private QuestionDto question;

    private ResponseDto response;

    private List<AnswerDto> answers;
}
