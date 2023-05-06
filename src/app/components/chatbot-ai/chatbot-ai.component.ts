import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatbotAiService } from 'src/app/services/chatbot-ai.service';

@Component({
  selector: 'app-chatbot-ai',
  templateUrl: './chatbot-ai.component.html',
  providers: [ ChatbotAiService ],
  styleUrls: ['./chatbot-ai.component.css']
})
export class ChatbotAiComponent implements OnInit {
  messages: any[] = [];

  constructor(private chatbotaiService: ChatbotAiService,
    private router: Router) {}

  ngOnInit() {
    this.chatbotaiService.loadMessages().subscribe(
      (messages) => {
        this.messages = messages;
      },
      (error) => {
        console.log('Error while loading messages:', error);
      }
    );
  }

  sendMessage(event: any) {
    const messageText = event.target.message.value.trim();

    if (messageText) {
      const userMessage = {
        reply: true,
        text: messageText,
        date: new Date(),
        user: {
          name: 'You',
          avatar: 'https://i.gifer.com/no.gif',
        },
      };

      this.messages.push(userMessage);

      this.chatbotaiService.askChatbot(messageText).subscribe(
        (response) => {
          const botReply = response[0]?.text;

          if (botReply) {
            const botReplyMessage = {
              reply: false,
              text: botReply,
              date: new Date(),
              user: {
                name: 'Petbot',
                avatar: 'https://i.imgur.com/Yns31u5.jpeg',
              },
            };

            setTimeout(() => {
              this.messages.push(botReplyMessage);
            }, 500);
          }
        },
        (error) => {
          console.log('Error while asking chatbot:', error);
        }
      );

      event.target.reset();
    }
  }


  gotoLRs(){
    this.router.navigate(['/all-learning-resources']);
  }
}
