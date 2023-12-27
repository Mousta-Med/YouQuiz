package com.springboot.youquiz.Service.Impl;

import com.springboot.youquiz.Dto.MediaDto;
import com.springboot.youquiz.Model.Media;
import com.springboot.youquiz.Model.Question;
import com.springboot.youquiz.Repository.MediaRepository;
import com.springboot.youquiz.Repository.QuestionRepository;
import com.springboot.youquiz.Service.MediaService;
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
public class MediaServiceImpl implements MediaService {

    @Autowired
    private MediaRepository mediaRepository;
    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public MediaDto save(MediaDto mediaDto) {
        Media media = modelMapper.map(mediaDto, Media.class);
        Question question = questionRepository.findById(mediaDto.getQuestionId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Question Not Found"));
        media.setQuestion(question);
        return modelMapper.map(mediaRepository.save(media), MediaDto.class);
    }

    @Override
    public void delete(Long id) {
        mediaRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Media not found with id " + id));
        mediaRepository.deleteById(id);
    }

    @Override
    public MediaDto update(Long id, MediaDto mediaDto) {
        Media existingMedia = mediaRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Media not found with id " + id));
        Question question = questionRepository.findById(mediaDto.getQuestionId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Question Not Found"));
        existingMedia.setQuestion(question);
        existingMedia.setMediaType(mediaDto.getMediaType());
        existingMedia.setSrc(mediaDto.getSrc());
        return modelMapper.map(mediaRepository.save(existingMedia), MediaDto.class);
    }

    @Override
    public MediaDto findOne(Long id) {
        return mediaRepository.findById(id)
                .map(media -> modelMapper.map(media, MediaDto.class)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Media not found with id " + id));
    }

    @Override
    public List<MediaDto> findAll() {
        return mediaRepository.findAll().stream().map(media -> modelMapper.map(media, MediaDto.class)).collect(Collectors.toList());
    }

    @Override
    public Page<MediaDto> findWithPagination(Pageable pageable) {
        Page<Media> mediasPage = mediaRepository.findAll(pageable);
        return mediasPage.map(media -> modelMapper.map(media, MediaDto.class));
    }
}
