package com.springboot.youquiz.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LevelDto {

    private Long id;

    @NotBlank(message = "description can't be empty")
    private String description;

    private Double maxPoints;

    private Double minPoints;
}
