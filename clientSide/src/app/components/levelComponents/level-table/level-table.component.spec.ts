import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LevelTableComponent} from './level-table.component';

describe('TableComponent', () => {
  let component: LevelTableComponent;
  let fixture: ComponentFixture<LevelTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelTableComponent]
    });
    fixture = TestBed.createComponent(LevelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
