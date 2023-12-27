package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.LevelDto;
import com.springboot.youquiz.Dto.RespDto.LevelRespDto;
import com.springboot.youquiz.Service.LevelService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/level")
public class LevelController {
    @Autowired
    private LevelService levelService;

    @GetMapping
    public ResponseEntity<List<LevelRespDto>> findAllLevels() {
        return ResponseEntity.ok(levelService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<LevelRespDto>> getPaginatedLevels(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(levelService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LevelRespDto> findOneLevel(@PathVariable Long id) {
        return ResponseEntity.ok(levelService.findOne(id));
    }

    @PostMapping
    public ResponseEntity<LevelRespDto> saveLevel(@Valid @RequestBody LevelDto levelDto) {
        return ResponseEntity.ok(levelService.save(levelDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<LevelRespDto> updateLevel(@PathVariable long id, @Valid @RequestBody LevelDto levelDto) {
        return ResponseEntity.ok(levelService.update(id, levelDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLevel(@PathVariable(name = "id") Long id) {
        levelService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
