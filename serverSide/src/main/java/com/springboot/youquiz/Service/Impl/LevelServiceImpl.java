package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.LevelDto;
import com.springboot.youquiz.Dto.RespDto.LevelRespDto;
import com.springboot.youquiz.Model.Level;
import com.springboot.youquiz.Repository.LevelRepository;
import com.springboot.youquiz.Service.LevelService;
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
public class LevelServiceImpl implements LevelService {
    @Autowired
    private LevelRepository levelRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    public LevelServiceImpl(LevelRepository levelRepository, ModelMapper modelMapper) {
        this.levelRepository = levelRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public LevelRespDto save(LevelDto levelDto) {
        Level level = modelMapper.map(levelDto, Level.class);
        return modelMapper.map(levelRepository.save(level), LevelRespDto.class);
    }

    @Override
    public void delete(Long id) {
        levelRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Level not found with id " + id));
        levelRepository.deleteById(id);
    }

    @Override
    public LevelRespDto update(Long id, LevelDto levelDto) {
        Level existingLevel = levelRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Level not found with id " + id));
        levelDto.setId(id);
        BeanUtils.copyProperties(levelDto, existingLevel);
        return modelMapper.map(levelRepository.save(existingLevel), LevelRespDto.class);
    }

    @Override
    public LevelRespDto findOne(Long id) {
        return levelRepository.findById(id)
                .map(level -> modelMapper.map(level, LevelRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Level not found with id " + id));
    }

    @Override
    public List<LevelRespDto> findAll() {
        return levelRepository.findAll().stream().map(level -> modelMapper.map(level, LevelRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<LevelRespDto> findWithPagination(Pageable pageable) {
        Page<Level> levelPage = levelRepository.findAll(pageable);
        return levelPage.map(level -> modelMapper.map(level, LevelRespDto.class));
    }

}
