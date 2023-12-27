package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.RespDto.StudentRespDto;
import com.springboot.youquiz.Dto.StudentDto;
import com.springboot.youquiz.Service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public ResponseEntity<List<StudentRespDto>> findAllStudents() {
        return ResponseEntity.ok(studentService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<StudentRespDto>> getPaginatedStudents(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(studentService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentRespDto> findOneStudent(@PathVariable Long id) {
        return ResponseEntity.ok(studentService.findOne(id));
    }

    @PostMapping
    public ResponseEntity<StudentRespDto> saveStudent(@Valid @RequestBody StudentDto studentDto) {
        return ResponseEntity.ok(studentService.save(studentDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<StudentRespDto> updateStudent(@PathVariable long id, @Valid @RequestBody StudentDto studentDto) {
        return ResponseEntity.ok(studentService.update(id, studentDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable(name = "id") Long id) {
        studentService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
