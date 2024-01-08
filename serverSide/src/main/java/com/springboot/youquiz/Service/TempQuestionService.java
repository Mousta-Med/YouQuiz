package com.springboot.youquiz.Service;

import com.springboot.youquiz.Dto.RespDto.TempQuestionRespDto;
import com.springboot.youquiz.Dto.TempQuestionDto;

import java.util.List;

public interface TempQuestionService extends BaseService<TempQuestionDto, Long, TempQuestionRespDto> {
    List<TempQuestionRespDto> findTempQuestionByQuizId(Long quizId);
}
