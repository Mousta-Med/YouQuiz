import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTempQuestionComponent } from './manage-temp-question.component';

describe('ManageTempQuestionComponent', () => {
  let component: ManageTempQuestionComponent;
  let fixture: ComponentFixture<ManageTempQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTempQuestionComponent]
    });
    fixture = TestBed.createComponent(ManageTempQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
