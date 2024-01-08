package com.springboot.youquiz.Repository;

import com.springboot.youquiz.Model.AssignQuiz;
import com.springboot.youquiz.Model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AssignQuizRepository extends JpaRepository<AssignQuiz, Long> {
    List<AssignQuiz> findAssignQuizsByQuizId(Long quiz_id);
    Optional<AssignQuiz> findAssignQuizByStudentIdAndQuizId(Long student_id, Long quiz_id);
}
