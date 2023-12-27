package com.springboot.youquiz.Repository;

import com.springboot.youquiz.Model.Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponseRepository extends JpaRepository<Response, Long> {
}
