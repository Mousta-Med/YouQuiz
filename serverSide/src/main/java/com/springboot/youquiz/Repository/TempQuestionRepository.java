package com.springboot.youquiz.Repository;

import com.springboot.youquiz.Model.TempQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TempQuestionRepository extends JpaRepository<TempQuestion, Long> {
    List<TempQuestion> findTempQuestionsByQuizId(Long quiz_id);
}
