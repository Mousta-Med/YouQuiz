package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.QuizDto;
import com.springboot.youquiz.Dto.RespDto.QuizRespDto;
import com.springboot.youquiz.Model.Quiz;
import com.springboot.youquiz.Model.Teacher;
import com.springboot.youquiz.Repository.QuizRepository;
import com.springboot.youquiz.Repository.TeacherRepository;
import com.springboot.youquiz.Service.QuizService;
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
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public QuizRespDto save(QuizDto quizDto) {
        Quiz quiz = modelMapper.map(quizDto, Quiz.class);
        Teacher teacher = teacherRepository.findById(quizDto.getTeacherId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Teacher Not found"));
        quiz.setTeacher(teacher);
        return modelMapper.map(quizRepository.save(quiz), QuizRespDto.class);
    }

    @Override
    public void delete(Long id) {
        quizRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Quiz not found with id " + id));
        quizRepository.deleteById(id);
    }

    @Override
    public QuizRespDto update(Long id, QuizDto quizDto) {
        Quiz existingQuiz = quizRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Quiz not found with id " + id));
        Teacher teacher = teacherRepository.findById(quizDto.getTeacherId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Teacher Not found"));
        existingQuiz.setTeacher(teacher);
        return modelMapper.map(quizRepository.save(existingQuiz), QuizRespDto.class);
    }

    @Override
    public QuizRespDto findOne(Long id) {
        return quizRepository.findById(id)
                .map(quiz -> modelMapper.map(quiz, QuizRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Quiz not found with id " + id));
    }

    @Override
    public List<QuizRespDto> findAll() {
        return quizRepository.findAll().stream().map(quiz -> modelMapper.map(quiz, QuizRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<QuizRespDto> findWithPagination(Pageable pageable) {
        Page<Quiz> quizsPage = quizRepository.findAll(pageable);
        return quizsPage.map(quiz -> modelMapper.map(quiz, QuizRespDto.class));
    }
}
