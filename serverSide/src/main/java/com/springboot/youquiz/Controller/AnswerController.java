package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.AnswerDto;
import com.springboot.youquiz.Dto.RespDto.AnswerRespDto;
import com.springboot.youquiz.Service.AnswerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/answer")
public class AnswerController {


    @Autowired
    private AnswerService answerService;

    @GetMapping
    public ResponseEntity<List<AnswerRespDto>> findAllAnswers() {
        return ResponseEntity.ok(answerService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<AnswerRespDto>> getPaginatedAnswers(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(answerService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AnswerRespDto> findOneAnswer(@PathVariable Long id) {
        return ResponseEntity.ok(answerService.findOne(id));
    }

    @PostMapping
    public ResponseEntity<AnswerRespDto> saveAnswer(@Valid @RequestBody AnswerDto answerDto) {
        return ResponseEntity.ok(answerService.save(answerDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AnswerRespDto> updateAnswer(@PathVariable long id, @Valid @RequestBody AnswerDto answerDto) {
        return ResponseEntity.ok(answerService.update(id, answerDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnswer(@PathVariable(name = "id") Long id) {
        answerService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
