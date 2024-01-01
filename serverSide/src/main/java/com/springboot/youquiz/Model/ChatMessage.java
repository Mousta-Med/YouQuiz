package com.springboot.youquiz.Model;

import com.springboot.youquiz.Enum.MessageType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ChatMessage {

    private String message;

    private String sender;

    private MessageType type;
}
