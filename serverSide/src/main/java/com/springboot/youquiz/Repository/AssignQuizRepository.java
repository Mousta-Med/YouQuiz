package com.springboot.youquiz.Repository;

import com.springboot.youquiz.Model.AssignQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssignQuizRepository extends JpaRepository<AssignQuiz, Long> {
}
