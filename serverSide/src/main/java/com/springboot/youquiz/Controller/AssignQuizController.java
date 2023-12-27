package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.AssignQuizDto;
import com.springboot.youquiz.Dto.RespDto.AssignQuizRespDto;
import com.springboot.youquiz.Service.Impl.AssignQuizServiceImpl;
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
    private AssignQuizServiceImpl assignQuizServiceImpl;

    @GetMapping
    public ResponseEntity<List<AssignQuizRespDto>> findAllAssignQuizs() {
        return ResponseEntity.ok(assignQuizServiceImpl.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<AssignQuizRespDto>> getPaginatedAssignQuizs(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(assignQuizServiceImpl.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AssignQuizRespDto> findOneAssignQuiz(@PathVariable Long id) {
        return ResponseEntity.ok(assignQuizServiceImpl.findOne(id));
    }

    @PostMapping
    public ResponseEntity<AssignQuizRespDto> saveAssignQuiz(@Valid @RequestBody AssignQuizDto assignQuizDto) {
        return ResponseEntity.ok(assignQuizServiceImpl.save(assignQuizDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AssignQuizRespDto> updateAssignQuiz(@PathVariable long id, @Valid @RequestBody AssignQuizDto assignQuizDto) {
        return ResponseEntity.ok(assignQuizServiceImpl.update(id, assignQuizDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAssignQuiz(@PathVariable(name = "id") Long id) {
        assignQuizServiceImpl.delete(id);
        return ResponseEntity.noContent().build();
    }
}
