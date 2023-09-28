import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangeChildComponent } from './form-change-child.component';

describe('FormChangeChildComponent', () => {
  let component: FormChangeChildComponent;
  let fixture: ComponentFixture<FormChangeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChangeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
