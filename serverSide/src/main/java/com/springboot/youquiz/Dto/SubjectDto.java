package com.springboot.youquiz.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SubjectDto {

    private Long id;

    @NotBlank(message = "title can't be empty")
    private String title;

    private Long parentSubjectId;
}
