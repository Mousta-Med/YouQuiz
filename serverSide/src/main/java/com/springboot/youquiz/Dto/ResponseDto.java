package com.springboot.youquiz.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ResponseDto {

    private Long id;

    @NotBlank(message = "response can't be empty")
    private String response;
}
