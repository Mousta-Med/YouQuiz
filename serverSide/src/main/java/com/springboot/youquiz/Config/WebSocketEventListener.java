package com.springboot.youquiz.Config;

import com.springboot.youquiz.Enum.MessageType;
import com.springboot.youquiz.Model.ChatMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
@RequiredArgsConstructor
@Slf4j
public class WebSocketEventListener {

    private final SimpMessageSendingOperations sendingOperations;

    @EventListener
    public void disconnectEvent(SessionDisconnectEvent event){
        StompHeaderAccessor stompHeaderAccessor = StompHeaderAccessor.wrap(event.getMessage());
        String username = (String) stompHeaderAccessor.getSessionAttributes().get("username");
        if(username != null){
            log.info("User Disconnected: {}", username);
            var chatMessage = ChatMessage.builder()
                    .type(MessageType.LEAVE)
                    .sender(username)
                    .build();
            sendingOperations.convertAndSend("/topic/public", chatMessage);
        }
    }
}
