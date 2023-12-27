package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.RespDto.SubjectRespDto;
import com.springboot.youquiz.Dto.SubjectDto;
import com.springboot.youquiz.Service.Impl.SubjectServiceImpl;
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
    private SubjectServiceImpl subjectServiceImpl;

    @GetMapping
    public ResponseEntity<List<SubjectRespDto>> getAllSubjects() {
        return ResponseEntity.ok(subjectServiceImpl.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<SubjectRespDto>> getPaginatedSubjects(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(subjectServiceImpl.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubjectRespDto> getOneSubject(@PathVariable Long id) {
        return ResponseEntity.ok(subjectServiceImpl.findOne(id));
    }

    @PostMapping
    public ResponseEntity<SubjectRespDto> addSubject(@Valid @RequestBody SubjectDto subjectDto) {
        return ResponseEntity.ok(subjectServiceImpl.save(subjectDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SubjectRespDto> updateSubject(@PathVariable long id, @Valid @RequestBody SubjectDto subjectDto) {
        return ResponseEntity.ok(subjectServiceImpl.update(id, subjectDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubject(@PathVariable(name = "id") Long id) {
        subjectServiceImpl.delete(id);
        return ResponseEntity.noContent().build();
    }


}
