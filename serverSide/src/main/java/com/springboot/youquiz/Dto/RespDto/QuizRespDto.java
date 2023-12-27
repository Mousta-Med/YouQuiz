package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.AssignQuizDto;
import com.springboot.youquiz.Dto.TeacherDto;
import com.springboot.youquiz.Dto.TempQuestionDto;
import lombok.Data;

import java.util.List;

@Data
public class QuizRespDto {

    private Long id;

    private Integer successResult;

    private Boolean answersAccess;

    private Boolean resultAccessAfterTest;

    private Integer chancesNum;

    private String comment;

    private TeacherDto teacher;

    private List<AssignQuizDto> assignQuizes;

    private List<TempQuestionDto> tempQuestions;

}
