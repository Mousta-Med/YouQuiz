package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.RespDto.TempQuestionRespDto;
import com.springboot.youquiz.Dto.TempQuestionDto;
import com.springboot.youquiz.Service.TempQuestionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tempQuestion")
public class TempQuestionController {

    @Autowired
    private TempQuestionService tempQuestionService;

    @GetMapping
    public ResponseEntity<List<TempQuestionRespDto>> findAllTempQuestions() {
        return ResponseEntity.ok(tempQuestionService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<TempQuestionRespDto>> getPaginatedTempQuestions(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(tempQuestionService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TempQuestionRespDto> findOneTempQuestion(@PathVariable Long id) {
        return ResponseEntity.ok(tempQuestionService.findOne(id));
    }
    @GetMapping("/quiz/{id}")
    public ResponseEntity<List<TempQuestionRespDto>> findTempQuestionsByQuizId(@PathVariable Long id) {
        return ResponseEntity.ok(tempQuestionService.findTempQuestionByQuizId(id));
    }

    @PostMapping
    public ResponseEntity<TempQuestionRespDto> saveTempQuestion(@Valid @RequestBody TempQuestionDto tempQuestionDto) {
        return ResponseEntity.ok(tempQuestionService.save(tempQuestionDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TempQuestionRespDto> updateTempQuestion(@PathVariable long id, @Valid @RequestBody TempQuestionDto tempQuestionDto) {
        return ResponseEntity.ok(tempQuestionService.update(id, tempQuestionDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTempQuestion(@PathVariable(name = "id") Long id) {
        tempQuestionService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
