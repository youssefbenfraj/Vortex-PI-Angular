import { TestBed } from '@angular/core/testing';

import { ChatbotAiService } from './chatbot-ai.service';

describe('ChatbotAiService', () => {
  let service: ChatbotAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
