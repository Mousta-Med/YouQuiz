package com.springboot.youquiz.Service;

import com.springboot.youquiz.Dto.AssignQuizDto;
import com.springboot.youquiz.Dto.RespDto.AssignQuizRespDto;
import com.springboot.youquiz.Model.AssignQuiz;

import java.util.List;

public interface AssignQuizService extends BaseService<AssignQuizDto, Long, AssignQuizRespDto> {
    List<AssignQuizRespDto> findAssignQuizsByQuizId(Long quiz_id);
}
