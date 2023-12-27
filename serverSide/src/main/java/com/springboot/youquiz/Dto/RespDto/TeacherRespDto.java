package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.PersonDto;
import com.springboot.youquiz.Dto.QuizDto;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class TeacherRespDto extends PersonDto {

    private String specialty;

    private List<QuizDto> quizzes;
}
