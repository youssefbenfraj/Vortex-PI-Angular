import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLearningResourcesComponent } from './all-learning-resources.component';

describe('AllLearningResourcesComponent', () => {
  let component: AllLearningResourcesComponent;
  let fixture: ComponentFixture<AllLearningResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLearningResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLearningResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
