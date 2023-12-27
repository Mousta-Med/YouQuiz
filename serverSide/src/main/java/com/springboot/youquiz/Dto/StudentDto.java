package com.springboot.youquiz.Dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public final class StudentDto extends PersonDto {

    private LocalDate registrationDate;

}
