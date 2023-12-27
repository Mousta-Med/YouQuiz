package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.ValidationDto;
import lombok.Data;

import java.util.List;

@Data
public class ResponseRespDto {

    private Long id;

    private String response;

    private List<ValidationDto> validations;
}
