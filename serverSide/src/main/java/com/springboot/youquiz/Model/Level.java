package com.springboot.youquiz.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table(name = "levels")
public class Level {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "description")
    private String description;

    @Column(nullable = false, name = "maxPoints")
    private Double maxPoints;

    @Column(nullable = false, name = "minPoints")
    private Double minPoints;

    @OneToMany(mappedBy = "level", fetch = FetchType.LAZY)
    private List<Question> questions;
}
