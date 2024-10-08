import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeaveTypeComponent } from './create-leave-type.component';

describe('CreateLeaveTypeComponent', () => {
  let component: CreateLeaveTypeComponent;
  let fixture: ComponentFixture<CreateLeaveTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLeaveTypeComponent]
    });
    fixture = TestBed.createComponent(CreateLeaveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
