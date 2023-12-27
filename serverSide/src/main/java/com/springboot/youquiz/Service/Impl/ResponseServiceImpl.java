package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.RespDto.ResponseRespDto;
import com.springboot.youquiz.Dto.ResponseDto;
import com.springboot.youquiz.Model.Response;
import com.springboot.youquiz.Repository.ResponseRepository;
import com.springboot.youquiz.Service.ResponseService;
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
public class ResponseServiceImpl implements ResponseService {

    @Autowired
    private ResponseRepository responseRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ResponseRespDto save(ResponseDto responseDto) {
        Response response = modelMapper.map(responseDto, Response.class);
        return modelMapper.map(responseRepository.save(response), ResponseRespDto.class);
    }

    @Override
    public void delete(Long id) {
        responseRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Response not found with id " + id));
        responseRepository.deleteById(id);
    }

    @Override
    public ResponseRespDto update(Long id, ResponseDto responseDto) {
        Response existingResponse = responseRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Response not found with id " + id));
        existingResponse.setResponse(responseDto.getResponse());
        return modelMapper.map(responseRepository.save(existingResponse), ResponseRespDto.class);
    }

    @Override
    public ResponseRespDto findOne(Long id) {
        return responseRepository.findById(id)
                .map(response -> modelMapper.map(response, ResponseRespDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Response not found with id " + id));
    }

    @Override
    public List<ResponseRespDto> findAll() {
        return responseRepository.findAll().stream().map(response -> modelMapper.map(response, ResponseRespDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<ResponseRespDto> findWithPagination(Pageable pageable) {
        Page<Response> responsePage = responseRepository.findAll(pageable);
        return responsePage.map(response -> modelMapper.map(response, ResponseRespDto.class));
    }

}
