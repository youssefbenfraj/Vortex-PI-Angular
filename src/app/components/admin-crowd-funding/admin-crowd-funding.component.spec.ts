import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrowdFundingComponent } from './admin-crowd-funding.component';

describe('AdminCrowdFundingComponent', () => {
  let component: AdminCrowdFundingComponent;
  let fixture: ComponentFixture<AdminCrowdFundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCrowdFundingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCrowdFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
