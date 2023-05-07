import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chatbot } from '../entities/Chatbot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotAiService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:8075/chatbot";

  loadMessages(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      observer.next([]);
      observer.complete();
    });
  }

  askChatbot(chatbot: Chatbot): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = {
        "sender": "Client",
        "message": chatbot
    }
    return this.http.post(this.apiUrl, body, {'headers':headers})
  }
}
