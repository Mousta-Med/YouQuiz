package com.springboot.youquiz.Repository;

import com.springboot.youquiz.Model.Validation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ValidationRepository extends JpaRepository<Validation, Long> {
}
