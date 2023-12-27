package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.LevelDto;
import com.springboot.youquiz.Dto.RespDto.LevelRespDto;
import com.springboot.youquiz.Model.Level;
import com.springboot.youquiz.Repository.LevelRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class LevelServiceImplTest {

    @Mock
    private LevelRepository levelRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private LevelServiceImpl levelService;

    @Test
    void save() {
        LevelDto levelDto = new LevelDto();
        Level level = new Level();
        LevelRespDto expectedResponse = new LevelRespDto();

        when(modelMapper.map(eq(levelDto), eq(Level.class))).thenReturn(level);
        when(levelRepository.save(any(Level.class))).thenReturn(level);
        when(modelMapper.map(eq(level), eq(LevelRespDto.class))).thenReturn(expectedResponse);

        LevelRespDto result = levelService.save(levelDto);

        assertEquals(expectedResponse, result);
        verify(modelMapper).map(eq(levelDto), eq(Level.class));
        verify(levelRepository).save(any(Level.class));
        verify(modelMapper).map(eq(level), eq(LevelRespDto.class));
    }

    @Test
    void delete() {
        Long id = 1L;
        Level level = new Level();
        when(levelRepository.findById(eq(id))).thenReturn(Optional.of(level));
        levelService.delete(id);
        verify(levelRepository).findById(eq(id));
        verify(levelRepository).deleteById(eq(id));
    }


    @Test
    void update() {
        Long id = 1L;
        LevelDto levelDto = new LevelDto();
        Level existingLevel = new Level();
        LevelRespDto expectedResponse = new LevelRespDto();
//        when(modelMapper.map(eq(levelDto), eq(Level.class))).thenReturn(existingLevel);
        when(modelMapper.map(eq(existingLevel), eq(LevelRespDto.class))).thenReturn(expectedResponse);
        when(levelRepository.findById(eq(id))).thenReturn(Optional.of(existingLevel));
        when(levelRepository.save(any(Level.class))).thenReturn(existingLevel);
        LevelRespDto result = levelService.update(id, levelDto);
        assertEquals(expectedResponse, result);
        verify(levelRepository).findById(eq(id));
        verify(levelRepository).save(eq(existingLevel));
//        verify(modelMapper).map(eq(levelDto), eq(Level.class));
        verify(modelMapper).map(eq(existingLevel), eq(LevelRespDto.class));
    }


    @Test
    void findOne() {
        Long id = 1L;
        Level level = new Level();
        LevelRespDto expectedResponse = new LevelRespDto();

        when(levelRepository.findById(eq(id))).thenReturn(Optional.of(level));
        when(modelMapper.map(eq(level), eq(LevelRespDto.class))).thenReturn(expectedResponse);

        LevelRespDto result = levelService.findOne(id);

        assertEquals(expectedResponse, result);
        verify(levelRepository).findById(eq(id));
        verify(modelMapper).map(eq(level), eq(LevelRespDto.class));
    }

    @Test
    void findAll() {
        List<Level> levels = Collections.singletonList(new Level());
        List<LevelRespDto> expectedResponse = Collections.singletonList(new LevelRespDto());

        when(levelRepository.findAll()).thenReturn(levels);
        when(modelMapper.map(any(Level.class), eq(LevelRespDto.class))).thenReturn(expectedResponse.get(0));

        List<LevelRespDto> result = levelService.findAll();

        assertEquals(expectedResponse, result);
        verify(levelRepository).findAll();
        verify(modelMapper, times(levels.size())).map(any(Level.class), eq(LevelRespDto.class));
    }

}
