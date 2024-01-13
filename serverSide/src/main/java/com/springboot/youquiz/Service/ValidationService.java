package com.springboot.youquiz.Service;

import com.springboot.youquiz.Dto.RespDto.ValidationRespDto;
import com.springboot.youquiz.Dto.ValidationDto;
import com.springboot.youquiz.Model.Validation;

import java.util.List;

public interface ValidationService extends BaseService<ValidationDto, Long, ValidationRespDto> {

    List<ValidationRespDto> findValidationsByQuestionId(Long question_id);
}
