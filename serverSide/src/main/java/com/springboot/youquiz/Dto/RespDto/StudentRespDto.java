package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.AssignQuizDto;
import com.springboot.youquiz.Dto.PersonDto;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public final class StudentRespDto extends PersonDto {

    private LocalDate registrationDate;

    private List<AssignQuizDto> assignQuizzes;
}
