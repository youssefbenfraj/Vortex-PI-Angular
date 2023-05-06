import { TestBed } from '@angular/core/testing';

import { NotificationLrService } from './notification-lr.service';

describe('NotificationLrService', () => {
  let service: NotificationLrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationLrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
