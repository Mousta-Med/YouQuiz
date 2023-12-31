package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.RespDto.TempQuestionRespDto;
import com.springboot.youquiz.Dto.TempQuestionDto;
import com.springboot.youquiz.Model.Question;
import com.springboot.youquiz.Model.Quiz;
import com.springboot.youquiz.Model.TempQuestion;
import com.springboot.youquiz.Repository.QuestionRepository;
import com.springboot.youquiz.Repository.QuizRepository;
import com.springboot.youquiz.Repository.TempQuestionRepository;
import com.springboot.youquiz.Service.TempQuestionService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TempQuestionServiceImpl implements TempQuestionService {

    @Autowired
    private TempQuestionRepository tempQuestionRepository;
    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public TempQuestionRespDto save(TempQuestionDto tempQuestionDto) {
        TempQuestion tempQuestion = modelMapper.map(tempQuestionDto, TempQuestion.class);
        Quiz quiz = quizRepository.findById(tempQuestionDto.getQuizId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Quiz not found"));
        Question question = questionRepository.findById(tempQuestionDto.getQuestionId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "TempQuestion not found"));
        tempQuestion.setQuiz(quiz);
        tempQuestion.setQuestion(question);
        return modelMapper.map(tempQuestionRepository.save(tempQuestion), TempQuestionRespDto.class);
    }

    @Override
    public void delete(Long id) {
        tempQuestionRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "TempQuestion not found with id " + id));
        tempQuestionRepository.deleteById(id);
    }

    @Override
    public TempQuestionRespDto update(Long id, TempQuestionDto tempQuestionDto) {
        TempQuestion existingTempQuestion = tempQuestionRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "TempQuestion not found with id " + id));
        Question question = questionRepository.findById(tempQuestionDto.getQuestionId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "TempQuestion not found"));
        Quiz quiz = quizRepository.findById(tempQuestionDto.getQuizId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Quiz not found"));
        existingTempQuestion.setQuiz(quiz);
        existingTempQuestion.setQuestion(question);
        return modelMapper.map(tempQuestionRepository.save(existingTempQuestion), TempQuestionRespDto.class);
    }

    @Override
    public TempQuestionRespDto findOne(Long id) {
        return tempQuestionRepository.findById(id)
                .map(tempQuestion -> modelMapper.map(tempQuestion, TempQuestionRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "TempQuestion not found with id " + id));
    }

    @Override
    public List<TempQuestionRespDto> findAll() {
        return tempQuestionRepository.findAll().stream().map(tempQuestion -> modelMapper.map(tempQuestion, TempQuestionRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<TempQuestionRespDto> findTempQuestionByQuizId(Long quizId) {
        return tempQuestionRepository.findTempQuestionsByQuizId(quizId).stream().map(tempQuestion -> modelMapper.map(tempQuestion, TempQuestionRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<TempQuestionRespDto> findWithPagination(Pageable pageable) {
        Page<TempQuestion> tempQuestionsPage = tempQuestionRepository.findAll(pageable);
        return tempQuestionsPage.map(tempQuestion -> modelMapper.map(tempQuestion, TempQuestionRespDto.class));
    }
}
