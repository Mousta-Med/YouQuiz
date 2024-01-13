package com.springboot.youquiz.Repository;

import com.springboot.youquiz.Model.Validation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ValidationRepository extends JpaRepository<Validation, Long> {
    List<Validation> findValidationsByQuestionId(Long question_id);
}
