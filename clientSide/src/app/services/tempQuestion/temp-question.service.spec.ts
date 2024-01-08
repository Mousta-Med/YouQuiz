import { TestBed } from '@angular/core/testing';

import { TempQuestionService } from './temp-question.service';

describe('TempQuestionService', () => {
  let service: TempQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
