package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.RespDto.StudentRespDto;
import com.springboot.youquiz.Dto.StudentDto;
import com.springboot.youquiz.Model.Student;
import com.springboot.youquiz.Repository.StudentRepository;
import com.springboot.youquiz.Service.StudentService;
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
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public StudentRespDto save(StudentDto studentDto) {
        return modelMapper.map(studentRepository.save(modelMapper.map(studentDto, Student.class)), StudentRespDto.class);
    }

    @Override
    public void delete(Long id) {
        studentRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found with id " + id));
        studentRepository.deleteById(id);
    }

    @Override
    public StudentRespDto update(Long id, StudentDto studentDto) {
        Student existingStudent = studentRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found with id " + id));
        return modelMapper.map(studentRepository.save(existingStudent), StudentRespDto.class);
    }

    @Override
    public StudentRespDto findOne(Long id) {
        return studentRepository.findById(id)
                .map(student -> modelMapper.map(student, StudentRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found with id " + id));
    }

    @Override
    public List<StudentRespDto> findAll() {
        return studentRepository.findAll().stream().map(student -> modelMapper.map(student, StudentRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<StudentRespDto> findWithPagination(Pageable pageable) {
        Page<Student> studentsPage = studentRepository.findAll(pageable);
        return studentsPage.map(student -> modelMapper.map(student, StudentRespDto.class));
    }
}
