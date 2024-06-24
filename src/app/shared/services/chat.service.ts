import { inject, Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Message } from '../interfaces/message';
import { BusinessService } from './business.service';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const endpoint = environment.serverURL;
const wsURL = environment.wsURL;
  
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  http: HttpClient = inject(HttpClient)
  businessService: BusinessService = inject(BusinessService);

  private ws: WebSocket;
  private messageSubject: Subject<Message> = new Subject<Message>();
  connected: Boolean = false;

  public connect(): void {

    this.ws = new WebSocket(wsURL, this.businessService.activeBusiness().name);
    this.connected = true;

    this.ws.onmessage = (event) => {
      this.messageSubject.next(event.data);
    }  
  }

  public sendMessage(message: Message): void {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not open.');
    }
  }

  public get messages(): Observable<Message> {
    return this.messageSubject.asObservable();
  }

  public disconnect() {
    if (this.connected) {
      this.ws.close();
      this.connected = false;
    }
  }

  fetchChatHistory(email, access_token: string): Observable<Message[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    });

    return this.http.get<Message[]>(`${endpoint}/chat/history/${email}`, { headers })
  }

}