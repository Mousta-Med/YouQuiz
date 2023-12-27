package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.QuestionDto;
import com.springboot.youquiz.Dto.RespDto.QuestionRespDto;
import com.springboot.youquiz.Model.Level;
import com.springboot.youquiz.Model.Question;
import com.springboot.youquiz.Model.Subject;
import com.springboot.youquiz.Repository.LevelRepository;
import com.springboot.youquiz.Repository.QuestionRepository;
import com.springboot.youquiz.Repository.SubjectRepository;
import com.springboot.youquiz.Service.QuestionService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private LevelRepository levelRepository;

    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public QuestionRespDto save(QuestionDto questionDto) {
        Level level = levelRepository.findById(questionDto.getLevelId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Level not found"));
        Subject subject = subjectRepository.findById(questionDto.getSubjectId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Subject not found"));
        Question question = modelMapper.map(questionDto, Question.class);
        question.setLevel(level);
        question.setSubject(subject);
        return modelMapper.map(questionRepository.save(question), QuestionRespDto.class);
    }

    @Override
    public void delete(Long id) {
        questionRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Question not found with id " + id));
        questionRepository.deleteById(id);
    }

    @Override
    public QuestionRespDto update(Long id, QuestionDto questionDto) {
        Question existingQuestion = questionRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Question not found with id " + id));
        Level level = levelRepository.findById(questionDto.getLevelId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Level not found"));
        Subject subject = subjectRepository.findById(questionDto.getSubjectId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Subject not found"));
        BeanUtils.copyProperties(questionDto, existingQuestion);
        existingQuestion.setId(id);
        existingQuestion.setLevel(level);
        existingQuestion.setSubject(subject);
        return modelMapper.map(questionRepository.save(existingQuestion), QuestionRespDto.class);
    }

    @Override
    public QuestionRespDto findOne(Long id) {
        return questionRepository.findById(id)
                .map(question -> modelMapper.map(question, QuestionRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Question not found with id " + id));
    }

    @Override
    public List<QuestionRespDto> findAll() {
        return questionRepository.findAll().stream().map(question -> modelMapper.map(question, QuestionRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<QuestionRespDto> findWithPagination(Pageable pageable) {
        Page<Question> questionPage = questionRepository.findAll(pageable);
        return questionPage.map(question -> modelMapper.map(question, QuestionRespDto.class));
    }


}
