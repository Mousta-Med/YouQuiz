package com.springboot.youquiz.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class ChatMessageDto {
    private String message;
    private String user;
}
