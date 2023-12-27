package com.springboot.youquiz.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public final class TeacherDto extends PersonDto {

    @NotBlank
    private String specialty;
}
