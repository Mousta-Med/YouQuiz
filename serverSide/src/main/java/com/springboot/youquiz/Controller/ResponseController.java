package com.springboot.youquiz.Controller;

import com.springboot.youquiz.Dto.RespDto.ResponseRespDto;
import com.springboot.youquiz.Dto.ResponseDto;
import com.springboot.youquiz.Service.Impl.ResponseServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/response")
public class ResponseController {

    @Autowired
    private ResponseServiceImpl responseServiceImpl;

    @GetMapping
    public ResponseEntity<List<ResponseRespDto>> getAllResponses() {
        return ResponseEntity.ok(responseServiceImpl.findAll());
    }

    @GetMapping("/paginated")
    public ResponseEntity<List<ResponseRespDto>> getPaginatedResponses(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        PageRequest pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(responseServiceImpl.findWithPagination(pageable).getContent());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseRespDto> getOneResponse(@PathVariable Long id) {
        return ResponseEntity.ok().body(responseServiceImpl.findOne(id));
    }

    @PostMapping
    public ResponseEntity<ResponseRespDto> addResponse(@Valid @RequestBody ResponseDto responseDto) {
        return ResponseEntity.ok(responseServiceImpl.save(responseDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseRespDto> updateResponse(@PathVariable long id, @Valid @RequestBody ResponseDto responseDto) {
        return ResponseEntity.ok(responseServiceImpl.update(id, responseDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResponse(@PathVariable(name = "id") Long id) {
        responseServiceImpl.delete(id);
        return ResponseEntity.noContent().build();
    }
}
