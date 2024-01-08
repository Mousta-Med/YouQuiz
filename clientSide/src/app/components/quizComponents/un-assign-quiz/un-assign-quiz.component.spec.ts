import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAssignQuizComponent } from './un-assign-quiz.component';

describe('UnAssignQuizComponent', () => {
  let component: UnAssignQuizComponent;
  let fixture: ComponentFixture<UnAssignQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnAssignQuizComponent]
    });
    fixture = TestBed.createComponent(UnAssignQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
