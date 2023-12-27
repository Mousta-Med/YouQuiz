package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.RespDto.ValidationRespDto;
import com.springboot.youquiz.Dto.ValidationDto;
import com.springboot.youquiz.Service.ValidationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/validation")
public class ValidationController {

    @Autowired
    private ValidationService validationService;

    @GetMapping
    public ResponseEntity<List<ValidationRespDto>> findAllValidations() {
        return ResponseEntity.ok(validationService.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<ValidationRespDto>> getPaginatedValidations(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(validationService.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ValidationRespDto> findOneValidation(@PathVariable Long id) {
        return ResponseEntity.ok(validationService.findOne(id));
    }

    @PostMapping
    public ResponseEntity<ValidationRespDto> saveValidation(@Valid @RequestBody ValidationDto validationDto) {
        return ResponseEntity.ok(validationService.save(validationDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ValidationRespDto> updateValidation(@PathVariable long id, @Valid @RequestBody ValidationDto validationDto) {
        return ResponseEntity.ok(validationService.update(id, validationDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteValidation(@PathVariable(name = "id") Long id) {
        validationService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
