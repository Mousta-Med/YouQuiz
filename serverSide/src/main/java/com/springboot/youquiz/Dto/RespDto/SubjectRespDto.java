package com.springboot.youquiz.Dto.RespDto;

import com.springboot.youquiz.Dto.QuestionDto;
import com.springboot.youquiz.Dto.SubjectDto;
import lombok.Data;

import java.util.List;

@Data
public class SubjectRespDto {

    private Long id;

    private String title;

    private SubjectDto parentSubject;

    private List<SubjectDto> ChildrenSubjects;

    private List<QuestionDto> questions;
}
