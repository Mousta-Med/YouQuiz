import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SubjectTableComponent} from '././subject-table.component';

describe('SubjectTabelComponent', () => {
  let component: SubjectTableComponent;
  let fixture: ComponentFixture<SubjectTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectTableComponent]
    });
    fixture = TestBed.createComponent(SubjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
