package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.QuestionDto;
import com.springboot.youquiz.Dto.RespDto.QuestionRespDto;
import com.springboot.youquiz.Service.Impl.QuestionServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/question")
public class QuestionController {

    @Autowired
    private QuestionServiceImpl questionServiceImpl;

    @GetMapping
    public ResponseEntity<List<QuestionRespDto>> getAllQuestions() {
        return ResponseEntity.ok(questionServiceImpl.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<QuestionRespDto>> getPaginatedQuestions(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(questionServiceImpl.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuestionRespDto> getOneQuestion(@PathVariable Long id) {
        return ResponseEntity.ok().body(questionServiceImpl.findOne(id));
    }

    @PostMapping
    public ResponseEntity<QuestionRespDto> addQuestion(@Valid @RequestBody QuestionDto questionDto) {
        return ResponseEntity.ok(questionServiceImpl.save(questionDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<QuestionRespDto> updateQuestion(@PathVariable long id, @Valid @RequestBody QuestionDto questionDto) {
        return ResponseEntity.ok(questionServiceImpl.update(id, questionDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuestion(@PathVariable(name = "id") Long id) {
        questionServiceImpl.delete(id);
        return ResponseEntity.noContent().build();
    }
}
