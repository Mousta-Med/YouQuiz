package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.RespDto.SubjectRespDto;
import com.springboot.youquiz.Dto.SubjectDto;
import com.springboot.youquiz.Service.SubjectService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/subject")
@Validated
public class SubjectController {


    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public ResponseEntity<List<SubjectRespDto>> getAllSubjects() {
        return ResponseEntity.ok(subjectService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<SubjectRespDto>> getPaginatedSubjects(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(subjectService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubjectRespDto> getOneSubject(@PathVariable Long id) {
        return ResponseEntity.ok(subjectService.findOne(id));
    }

    @PostMapping
    public ResponseEntity<SubjectRespDto> addSubject(@Valid @RequestBody SubjectDto subjectDto) {
        return ResponseEntity.ok(subjectService.save(subjectDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SubjectRespDto> updateSubject(@PathVariable long id, @Valid @RequestBody SubjectDto subjectDto) {
        return ResponseEntity.ok(subjectService.update(id, subjectDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubject(@PathVariable(name = "id") Long id) {
        subjectService.delete(id);
        return ResponseEntity.noContent().build();
    }


}
