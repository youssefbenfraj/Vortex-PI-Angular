import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLearningResourceComponent } from './admin-learning-resource.component';

describe('AdminLearningResourceComponent', () => {
  let component: AdminLearningResourceComponent;
  let fixture: ComponentFixture<AdminLearningResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLearningResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLearningResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
