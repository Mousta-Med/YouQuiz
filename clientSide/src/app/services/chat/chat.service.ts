import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import * as SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";
import {ChatMessageDto} from "../../models/chatMessage-dto.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private stompClient: any;

  private messageSubject: BehaviorSubject<ChatMessageDto[]> = new BehaviorSubject<ChatMessageDto[]>([]);

  private readonly socketUrl = `${environment.api.baseUrl}${environment.api.socketUrl}`;

  constructor() {
    this.initConnectionSocket();
  }

  initConnectionSocket() {
    const socket = new SockJS(this.socketUrl);
    this.stompClient = Stomp.over(socket);
  }

  joinRoom(roomId: string) {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {
        const messageContent = JSON.parse(messages.body);
        const currentMessage = this.messageSubject.getValue();
        currentMessage.push(messageContent);
        this.messageSubject.next(currentMessage);
      })
    });
  }

  sendMessage(roomId: string, chatMessage: ChatMessageDto) {
    this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage));
  }

  getMessageSubject(){
    return this.messageSubject.asObservable();
  }
}
