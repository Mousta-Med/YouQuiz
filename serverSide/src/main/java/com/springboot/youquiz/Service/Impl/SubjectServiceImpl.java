package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.RespDto.SubjectRespDto;
import com.springboot.youquiz.Dto.SubjectDto;
import com.springboot.youquiz.Model.Subject;
import com.springboot.youquiz.Repository.SubjectRepository;
import com.springboot.youquiz.Service.SubjectService;
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
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public SubjectRespDto save(SubjectDto subjectDto) {
        Subject parentSubject = null;
        if (subjectDto.getParentSubjectId() != null && subjectDto.getParentSubjectId() != 0) {
            parentSubject = subjectRepository.findById(subjectDto.getParentSubjectId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Subject not found"));
        }
        Subject subject = modelMapper.map(subjectDto, Subject.class);
        subject.setParentSubject(parentSubject);
        return modelMapper.map(subjectRepository.save(subject), SubjectRespDto.class);
    }

    @Override
    public void delete(Long id) {
        subjectRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Subject not found with id " + id));
        subjectRepository.deleteById(id);
    }

    @Override
    public SubjectRespDto update(Long id, SubjectDto subjectDto) {
        Subject existingSubject = subjectRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Subject not found with id " + id));
        Subject parentSubject = null;
        if (subjectDto.getParentSubjectId() != null && subjectDto.getParentSubjectId() != 0) {
            parentSubject = subjectRepository.findById(subjectDto.getParentSubjectId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Subject not found"));
        }
        existingSubject.setParentSubject(parentSubject);
        existingSubject.setTitle(subjectDto.getTitle());
        return modelMapper.map(subjectRepository.save(existingSubject), SubjectRespDto.class);
    }

    @Override
    public SubjectRespDto findOne(Long id) {
        return subjectRepository.findById(id)
                .map(subject -> modelMapper.map(subject, SubjectRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Subject not found with id " + id));
    }

    @Override
    public List<SubjectRespDto> findAll() {
        return subjectRepository.findAll().stream().map(subject -> modelMapper.map(subject, SubjectRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<SubjectRespDto> findWithPagination(Pageable pageable) {
        Page<Subject> subjectPage = subjectRepository.findAll(pageable);
        return subjectPage.map(subject -> modelMapper.map(subject, SubjectRespDto.class));
    }


}
