import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationTableComponent } from './validation-table.component';

describe('ValidationTableComponent', () => {
  let component: ValidationTableComponent;
  let fixture: ComponentFixture<ValidationTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationTableComponent]
    });
    fixture = TestBed.createComponent(ValidationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
