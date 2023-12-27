import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDataViewComponent } from './quiz-data-view.component';

describe('QuizDataViewComponent', () => {
  let component: QuizDataViewComponent;
  let fixture: ComponentFixture<QuizDataViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizDataViewComponent]
    });
    fixture = TestBed.createComponent(QuizDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
