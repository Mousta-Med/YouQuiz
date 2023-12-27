import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResponseComponent } from './manage-response.component';

describe('ManageResponseComponent', () => {
  let component: ManageResponseComponent;
  let fixture: ComponentFixture<ManageResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageResponseComponent]
    });
    fixture = TestBed.createComponent(ManageResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
