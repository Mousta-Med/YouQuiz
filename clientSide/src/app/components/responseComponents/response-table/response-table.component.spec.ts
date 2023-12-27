import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseTableComponent } from './response-table.component';

describe('ResponseTableComponent', () => {
  let component: ResponseTableComponent;
  let fixture: ComponentFixture<ResponseTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseTableComponent]
    });
    fixture = TestBed.createComponent(ResponseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
