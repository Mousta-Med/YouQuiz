package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.TempQuestionDto;
import com.springboot.youquiz.Service.Impl.TempQuestionServiceImpl;
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
    private TempQuestionServiceImpl tempQuestionServiceImpl;

    @GetMapping
    public ResponseEntity<List<TempQuestionDto>> findAllTempQuestions() {
        return ResponseEntity.ok(tempQuestionServiceImpl.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<TempQuestionDto>> getPaginatedTempQuestions(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(tempQuestionServiceImpl.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TempQuestionDto> findOneTempQuestion(@PathVariable Long id) {
        return ResponseEntity.ok(tempQuestionServiceImpl.findOne(id));
    }

    @PostMapping
    public ResponseEntity<TempQuestionDto> saveTempQuestion(@Valid @RequestBody TempQuestionDto tempQuestionDto) {
        return ResponseEntity.ok(tempQuestionServiceImpl.save(tempQuestionDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TempQuestionDto> updateTempQuestion(@PathVariable long id, @Valid @RequestBody TempQuestionDto tempQuestionDto) {
        return ResponseEntity.ok(tempQuestionServiceImpl.update(id, tempQuestionDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTempQuestion(@PathVariable(name = "id") Long id) {
        tempQuestionServiceImpl.delete(id);
        return ResponseEntity.noContent().build();
    }
}
