package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.MediaDto;
import com.springboot.youquiz.Service.MediaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/media")
public class MediaController {
    @Autowired
    private MediaService mediaService;

    @GetMapping
    public ResponseEntity<List<MediaDto>> findAllMedias() {
        return ResponseEntity.ok(mediaService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<MediaDto>> getPaginatedMedias(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(mediaService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MediaDto> findOneMedia(@PathVariable Long id) {
        return ResponseEntity.ok(mediaService.findOne(id));
    }

    @PostMapping
    public ResponseEntity<MediaDto> saveMedia(@Valid @RequestBody MediaDto mediaDto) {
        return ResponseEntity.ok(mediaService.save(mediaDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MediaDto> updateMedia(@PathVariable long id, @Valid @RequestBody MediaDto mediaDto) {
        return ResponseEntity.ok(mediaService.update(id, mediaDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedia(@PathVariable(name = "id") Long id) {
        mediaService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
