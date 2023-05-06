import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationLRService {

  // private webSocketSubject !: WebSocketSubject<any>;
  // private notificationSubject: Subject<string> = new Subject<string>();

  // public notificationSource = this.notificationSubject.asObservable();

  constructor() { }

  connect(): void {
    // this.webSocketSubject = webSocket('ws://localhost:8075/notifications');
    // this.webSocketSubject.subscribe(
    //   (message) => {
    //     this.notificationSubject.next(message);
    //     console.log(message)
    //   },
    //   (err) => console.log(err),
    //   () => console.log('WebSocket closed!')
    // );
  }
}
