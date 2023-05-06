import { TestBed } from '@angular/core/testing';

import { LearningResourceService } from './learning-resource.service';

describe('LearningResourceService', () => {
  let service: LearningResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
