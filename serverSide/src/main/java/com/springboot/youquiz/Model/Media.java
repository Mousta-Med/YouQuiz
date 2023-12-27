package com.springboot.youquiz.Model;

import com.springboot.youquiz.Enum.MediaType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "medias")
public class Media {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "src")
    private String src;

    @Column(nullable = false, name = "mediaType")
    @Enumerated(EnumType.STRING)
    private MediaType mediaType;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "question_id")
    private Question question;
}
