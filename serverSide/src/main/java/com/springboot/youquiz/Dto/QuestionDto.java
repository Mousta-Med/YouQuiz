package com.springboot.youquiz.Dto;

import com.springboot.youquiz.Enum.QuestionType;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class QuestionDto {
    private Long id;
    @NotBlank(message = "question content should not be empty")
    private String questionText;
    private Integer numberOfAnswers;
    private Integer numberOfCorrectAnswers;
    private QuestionType questionType;
    private Integer numberOfPoints;
    private Long subjectId;
    private Long levelId;
}
