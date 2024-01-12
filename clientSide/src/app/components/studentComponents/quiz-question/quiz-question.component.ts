import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AssignQuizDto} from "../../../models/assign-quiz-dto.model";
import {TempQuestionDto} from "../../../models/temp-question-dto.model";
import {ValidationService} from "../../../services/validation/validation.service";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnChanges {

  @Input()
  quiz: AssignQuizDto = {score: 0, chanceNumber: 0, date: '', notes: '', studentId: 0};

  @Input()
  tempQuestion: Array<TempQuestionDto> = [];

  constructor(
    private validationService: ValidationService,
  ) {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  getQuestionValidations(){
    this.validationService.getValidations();
  }


}
