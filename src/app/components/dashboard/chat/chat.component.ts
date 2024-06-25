import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/shared/interfaces/message';
import { BusinessService } from 'src/app/shared/services/business.service';
import { ChatService } from 'src/app/shared/services/chat.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  chatService: ChatService = inject(ChatService)
  businessService: BusinessService = inject(BusinessService)
  userService: UserService = inject(UserService)

  messageContent: string;
  messages: Message[] = [];
  private messagesSubscription: Subscription;


  constructor() {
    effect( () => {
      if (this.businessService.activeBusiness()) {
        this.chatService.connect()
      }
    })
    
  }

  ngOnInit(): void {    
    this.retrieveChatHistory();

    // this.messagesSubscription = this.chatService.messages.subscribe(message => {
    //   console.log(message);
    //   this.messages.push(message);
    // });

  }

  refreshChat() {
    this.chatService.connect();
    this.retrieveChatHistory();
  }

  sendMessage() {
    const message: Message = {
          businessName: this.businessService.activeBusiness().name,
          body: this.messageContent,
          sender: this.userService.loggedUser().username,
          createdAt: null
        };
    if (message.body !== "") {
      this.chatService.sendMessage(message);
    }
    this.messageContent = ''
    this.retrieveChatHistory()
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }

    this.chatService.disconnect()
  }

  retrieveChatHistory(): void {
    this.chatService.fetchChatHistory(this.userService.loggedUser().username, localStorage.getItem('access_token')).subscribe({
      next: (response) => {
        this.messages = response;
      },
      error: (error) => {
        console.error('Error fetching chat history', error.message);
      }
    })
  }

  formatTimestamp(timestamp: string): string {
    return (new Date(timestamp)).toLocaleTimeString();
  }

 
}
