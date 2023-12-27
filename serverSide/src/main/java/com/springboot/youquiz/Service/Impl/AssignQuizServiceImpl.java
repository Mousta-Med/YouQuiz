package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.AssignQuizDto;
import com.springboot.youquiz.Dto.RespDto.AssignQuizRespDto;
import com.springboot.youquiz.Model.AssignQuiz;
import com.springboot.youquiz.Model.Quiz;
import com.springboot.youquiz.Model.Student;
import com.springboot.youquiz.Repository.AssignQuizRepository;
import com.springboot.youquiz.Repository.QuizRepository;
import com.springboot.youquiz.Repository.StudentRepository;
import com.springboot.youquiz.Service.AssignQuizService;
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
public class AssignQuizServiceImpl implements AssignQuizService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private StudentRepository studentRepository;


    @Autowired
    private AssignQuizRepository assignQuizRepository;

    @Override
    public AssignQuizRespDto save(AssignQuizDto assignQuizDto) {
        AssignQuiz assignQuiz = modelMapper.map(assignQuizDto, AssignQuiz.class);
        Quiz quiz = quizRepository.findById(assignQuizDto.getQuizId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Quiz Not Found"));
        Student student = studentRepository.findById(assignQuizDto.getStudentId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student Not Found"));
        assignQuiz.setQuiz(quiz);
        assignQuiz.setStudent(student);
        return modelMapper.map(assignQuizRepository.save(assignQuiz), AssignQuizRespDto.class);
    }

    @Override
    public void delete(Long id) {
        assignQuizRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "AssignQuiz not found with id " + id));
        assignQuizRepository.deleteById(id);
    }

    @Override
    public AssignQuizRespDto update(Long id, AssignQuizDto assignQuizDto) {
        AssignQuiz existingAssignQuiz = assignQuizRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "AssignQuiz not found with id " + id));
        Quiz quiz = quizRepository.findById(assignQuizDto.getQuizId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Quiz Not Found"));
        Student student = studentRepository.findById(assignQuizDto.getStudentId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student Not Found"));
        BeanUtils.copyProperties(assignQuizDto, existingAssignQuiz);
        existingAssignQuiz.setQuiz(quiz);
        existingAssignQuiz.setStudent(student);
        existingAssignQuiz.setId(id);
        return modelMapper.map(assignQuizRepository.save(existingAssignQuiz), AssignQuizRespDto.class);
    }

    @Override
    public AssignQuizRespDto findOne(Long id) {
        return assignQuizRepository.findById(id)
                .map(assignQuiz -> modelMapper.map(assignQuiz, AssignQuizRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "AssignQuiz not found with id " + id));
    }

    @Override
    public List<AssignQuizRespDto> findAll() {
        return assignQuizRepository.findAll().stream().map(assignQuiz -> modelMapper.map(assignQuiz, AssignQuizRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<AssignQuizRespDto> findWithPagination(Pageable pageable) {
        Page<AssignQuiz> assignQuizPage = assignQuizRepository.findAll(pageable);
        return assignQuizPage.map(answer -> modelMapper.map(answer, AssignQuizRespDto.class));
    }
}
