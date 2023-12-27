package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.AssignQuizDto;
import com.springboot.youquiz.Dto.RespDto.AssignQuizRespDto;
import com.springboot.youquiz.Service.AssignQuizService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/assignQuiz")
public class AssignQuizController {
    @Autowired
    private AssignQuizService assignQuizService;

    @GetMapping
    public ResponseEntity<List<AssignQuizRespDto>> findAllAssignQuizs() {
        return ResponseEntity.ok(assignQuizService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<AssignQuizRespDto>> getPaginatedAssignQuizs(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(assignQuizService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AssignQuizRespDto> findOneAssignQuiz(@PathVariable Long id) {
        return ResponseEntity.ok(assignQuizService.findOne(id));
    }

    @PostMapping
    public ResponseEntity<AssignQuizRespDto> saveAssignQuiz(@Valid @RequestBody AssignQuizDto assignQuizDto) {
        return ResponseEntity.ok(assignQuizService.save(assignQuizDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AssignQuizRespDto> updateAssignQuiz(@PathVariable long id, @Valid @RequestBody AssignQuizDto assignQuizDto) {
        return ResponseEntity.ok(assignQuizService.update(id, assignQuizDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAssignQuiz(@PathVariable(name = "id") Long id) {
        assignQuizService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
