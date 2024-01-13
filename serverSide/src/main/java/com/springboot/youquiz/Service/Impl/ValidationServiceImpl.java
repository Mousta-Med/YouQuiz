package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.RespDto.ValidationRespDto;
import com.springboot.youquiz.Dto.ValidationDto;
import com.springboot.youquiz.Model.Question;
import com.springboot.youquiz.Model.Response;
import com.springboot.youquiz.Model.Validation;
import com.springboot.youquiz.Repository.QuestionRepository;
import com.springboot.youquiz.Repository.ResponseRepository;
import com.springboot.youquiz.Repository.ValidationRepository;
import com.springboot.youquiz.Service.ValidationService;
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
public class ValidationServiceImpl implements ValidationService {

    @Autowired
    private ValidationRepository validationRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private ResponseRepository responseRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public ValidationRespDto save(ValidationDto validationDto) {
        Validation validation = modelMapper.map(validationDto, Validation.class);
        Question question = questionRepository.findById(validationDto.getQuestionId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Question not found"));
        Response response = responseRepository.findById(validationDto.getResponseId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Response not found"));
        validation.setQuestion(question);
        validation.setResponse(response);
        return modelMapper.map(validationRepository.save(validation), ValidationRespDto.class);
    }

    @Override
    public void delete(Long id) {
        validationRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Validation not found with id " + id));
        validationRepository.deleteById(id);
    }

    @Override
    public ValidationRespDto update(Long id, ValidationDto validationDto) {
        Validation existingValidation = validationRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Validation not found with id " + id));
        Response response = responseRepository.findById(validationDto.getResponseId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Response not found"));
        Question question = questionRepository.findById(validationDto.getQuestionId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Question not found"));
        existingValidation.setQuestion(question);
        existingValidation.setResponse(response);
        return modelMapper.map(validationRepository.save(existingValidation), ValidationRespDto.class);
    }

    @Override
    public ValidationRespDto findOne(Long id) {
        return validationRepository.findById(id)
                .map(validation -> modelMapper.map(validation, ValidationRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Validation not found with id " + id));
    }

    @Override
    public List<ValidationRespDto> findAll() {
        return validationRepository.findAll().stream().map(validation -> modelMapper.map(validation, ValidationRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<ValidationRespDto> findWithPagination(Pageable pageable) {
        Page<Validation> validationsPage = validationRepository.findAll(pageable);
        return validationsPage.map(validation -> modelMapper.map(validation, ValidationRespDto.class));
    }

    @Override
    public List<ValidationRespDto> findValidationsByQuestionId(Long question_id) {
        return validationRepository.findValidationsByQuestionId(question_id).stream().map(validation -> modelMapper.map(validation, ValidationRespDto.class)).collect(Collectors.toList());
    }
}
