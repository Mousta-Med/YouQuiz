package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.QuizDto;
import com.springboot.youquiz.Dto.RespDto.QuizRespDto;
import com.springboot.youquiz.Service.QuizService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/quiz")
public class QuizController {
    @Autowired
    private QuizService quizService;

    @GetMapping
    public ResponseEntity<List<QuizRespDto>> findAllQuizs() {
        return ResponseEntity.ok(quizService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<QuizRespDto>> getPaginatedQuizs(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(quizService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuizRespDto> findOneQuiz(@PathVariable Long id) {
        return ResponseEntity.ok(quizService.findOne(id));
    }

    @PostMapping
    public ResponseEntity<QuizRespDto> saveQuiz(@Valid @RequestBody QuizDto quizDto) {
        return ResponseEntity.ok(quizService.save(quizDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<QuizRespDto> updateQuiz(@PathVariable long id, @Valid @RequestBody QuizDto quizDto) {
        return ResponseEntity.ok(quizService.update(id, quizDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuiz(@PathVariable(name = "id") Long id) {
        quizService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
