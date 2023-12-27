package com.springboot.youquiz.Dto;

import com.springboot.youquiz.Enum.MediaType;
import lombok.Data;

@Data
public class MediaDto {

    private Long id;

    private String src;

    private MediaType mediaType;

    private Long questionId;
}
