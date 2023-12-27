package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.RespDto.TeacherRespDto;
import com.springboot.youquiz.Dto.TeacherDto;
import com.springboot.youquiz.Model.Teacher;
import com.springboot.youquiz.Repository.TeacherRepository;
import com.springboot.youquiz.Service.TeacherService;
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
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public TeacherRespDto save(TeacherDto teacherDto) {
        return modelMapper.map(teacherRepository.save(modelMapper.map(teacherDto, Teacher.class)), TeacherRespDto.class);
    }

    @Override
    public void delete(Long id) {
        teacherRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Teacher not found with id " + id));
        teacherRepository.deleteById(id);
    }

    @Override
    public TeacherRespDto update(Long id, TeacherDto teacherDto) {
        Teacher existingTeacher = teacherRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Teacher not found with id " + id));
        return modelMapper.map(teacherRepository.save(existingTeacher), TeacherRespDto.class);
    }

    @Override
    public TeacherRespDto findOne(Long id) {
        return teacherRepository.findById(id)
                .map(teacher -> modelMapper.map(teacher, TeacherRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Teacher not found with id " + id));
    }

    @Override
    public List<TeacherRespDto> findAll() {
        return teacherRepository.findAll().stream().map(teacher -> modelMapper.map(teacher, TeacherRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<TeacherRespDto> findWithPagination(Pageable pageable) {
        Page<Teacher> teachersPage = teacherRepository.findAll(pageable);
        return teachersPage.map(teacher -> modelMapper.map(teacher, TeacherRespDto.class));
    }
}
