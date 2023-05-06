import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationLrComponent } from './notification-lr.component';

describe('NotificationLrComponent', () => {
  let component: NotificationLrComponent;
  let fixture: ComponentFixture<NotificationLrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationLrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationLrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
