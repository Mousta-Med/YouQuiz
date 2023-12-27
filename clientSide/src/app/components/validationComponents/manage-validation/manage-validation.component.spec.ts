import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageValidationComponent } from './manage-validation.component';

describe('ManageValidationComponent', () => {
  let component: ManageValidationComponent;
  let fixture: ComponentFixture<ManageValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageValidationComponent]
    });
    fixture = TestBed.createComponent(ManageValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
