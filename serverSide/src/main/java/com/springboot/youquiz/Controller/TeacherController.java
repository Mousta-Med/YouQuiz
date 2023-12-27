package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.RespDto.TeacherRespDto;
import com.springboot.youquiz.Dto.TeacherDto;
import com.springboot.youquiz.Service.TeacherService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/teacher")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @GetMapping
    public ResponseEntity<List<TeacherRespDto>> findAllTeachers() {
        return ResponseEntity.ok(teacherService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<TeacherRespDto>> getPaginatedTeachers(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(teacherService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeacherRespDto> findOneTeacher(@PathVariable Long id) {
        return ResponseEntity.ok(teacherService.findOne(id));
    }

    @PostMapping
    public ResponseEntity<TeacherRespDto> saveTeacher(@Valid @RequestBody TeacherDto teacherDto) {
        return ResponseEntity.ok(teacherService.save(teacherDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeacherRespDto> updateTeacher(@PathVariable long id, @Valid @RequestBody TeacherDto teacherDto) {
        return ResponseEntity.ok(teacherService.update(id, teacherDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeacher(@PathVariable(name = "id") Long id) {
        teacherService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
