package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.QuestionDto;
import lombok.Data;

import java.util.List;

@Data
public class LevelRespDto {

    private Long id;

    private String description;

    private Double maxPoints;

    private Double minPoints;

    private List<QuestionDto> questions;
}
