package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.RespDto.TeacherRespDto;
import com.springboot.youquiz.Dto.TeacherDto;
import com.springboot.youquiz.Service.Impl.TeacherServiceImpl;
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
    private TeacherServiceImpl teacherServiceImpl;

    @GetMapping
    public ResponseEntity<List<TeacherRespDto>> findAllTeachers() {
        return ResponseEntity.ok(teacherServiceImpl.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<TeacherRespDto>> getPaginatedTeachers(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(teacherServiceImpl.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeacherRespDto> findOneTeacher(@PathVariable Long id) {
        return ResponseEntity.ok(teacherServiceImpl.findOne(id));
    }

    @PostMapping
    public ResponseEntity<TeacherRespDto> saveTeacher(@Valid @RequestBody TeacherDto teacherDto) {
        return ResponseEntity.ok(teacherServiceImpl.save(teacherDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeacherRespDto> updateTeacher(@PathVariable long id, @Valid @RequestBody TeacherDto teacherDto) {
        return ResponseEntity.ok(teacherServiceImpl.update(id, teacherDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeacher(@PathVariable(name = "id") Long id) {
        teacherServiceImpl.delete(id);
        return ResponseEntity.noContent().build();
    }
}
