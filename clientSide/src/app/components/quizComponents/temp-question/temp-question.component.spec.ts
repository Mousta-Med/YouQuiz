import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempQuestionComponent } from './temp-question.component';

describe('TempQuestionComponent', () => {
  let component: TempQuestionComponent;
  let fixture: ComponentFixture<TempQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempQuestionComponent]
    });
    fixture = TestBed.createComponent(TempQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
