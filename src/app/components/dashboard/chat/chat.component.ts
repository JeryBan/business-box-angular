import { Component, inject } from '@angular/core';
import { catchError, map, tap } from 'rxjs';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  chatService: ChatService = inject(ChatService)

  messageContent: string = 'test';
  messages: string[] = [];

  ngOnInit() {
    this.chatService.connect();
  }

  liveData$ = this.chatService.messages$.pipe(
    map(rows => rows.data),
    catchError(error => { throw error }),
    tap({
      error: error => console.log('[Live component] Error:', error),
      complete: () => console.log('[Live component] Connection Closed')
    }
    )
  );

  sendMessage() {
    this.chatService.sendMessage(this.messageContent);
    // this.messageContent = '';
  }

}
