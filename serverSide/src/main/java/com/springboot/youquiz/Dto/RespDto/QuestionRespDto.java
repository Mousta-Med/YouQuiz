package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.*;
import com.springboot.youquiz.Enum.QuestionType;
import lombok.Data;

import java.util.List;

@Data
public class QuestionRespDto {

    private Long id;

    private String questionText;

    private Integer numberOfAnswers;

    private Integer numberOfCorrectAnswers;

    private QuestionType questionType;

    private Integer numberOfPoints;

    private SubjectDto subject;

    private LevelDto level;

    private List<MediaDto> medias;

    private List<ValidationDto> validations;

    private List<TempQuestionDto> tempQuestions;
}
