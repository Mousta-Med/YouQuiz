import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../../services/chat/chat.service";
import {ChatMessageDto} from "../../../models/chatMessage-dto.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{

  messageInput: string = '';
  userId: string = '';
  messageList: any[] = [];

  chatMessage: ChatMessageDto = {user: '', message: ''};

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.userId = this.route.snapshot.params["userId"];
    this.chatService.joinRoom("ABC");
    this.listMessage();
  }

  sendMessage(){
    this.chatMessage.message = this.messageInput;
    this.chatMessage.user = this.userId;
    this.chatService.sendMessage("ABC", this.chatMessage);
    this.messageInput = '';
  }

  listMessage(){
    this.chatService.getMessageSubject().subscribe(
      (messages: any) => {
        this.messageList = messages.map((item: any) => ({
          ...item,
          message_side:item.user === this.userId ? 'Sender': 'Receiver'
        }));
      }
    )
  }
}
