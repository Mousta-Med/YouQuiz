package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.MediaDto;
import com.springboot.youquiz.Service.Impl.MediaServiceImpl;
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
    private MediaServiceImpl mediaServiceImpl;

    @GetMapping
    public ResponseEntity<List<MediaDto>> findAllMedias() {
        return ResponseEntity.ok(mediaServiceImpl.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<MediaDto>> getPaginatedMedias(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(mediaServiceImpl.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MediaDto> findOneMedia(@PathVariable Long id) {
        return ResponseEntity.ok(mediaServiceImpl.findOne(id));
    }

    @PostMapping
    public ResponseEntity<MediaDto> saveMedia(@Valid @RequestBody MediaDto mediaDto) {
        return ResponseEntity.ok(mediaServiceImpl.save(mediaDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MediaDto> updateMedia(@PathVariable long id, @Valid @RequestBody MediaDto mediaDto) {
        return ResponseEntity.ok(mediaServiceImpl.update(id, mediaDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedia(@PathVariable(name = "id") Long id) {
        mediaServiceImpl.delete(id);
        return ResponseEntity.noContent().build();
    }
}
