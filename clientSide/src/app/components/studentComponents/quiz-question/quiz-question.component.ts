import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AssignQuizDto} from "../../../models/assign-quiz-dto.model";
import {TempQuestionDto} from "../../../models/temp-question-dto.model";
import {ValidationService} from "../../../services/validation/validation.service";
import {ValidationDto} from "../../../models/validation/validation-dto.model";
import {ValidationRespDto} from "../../../models/validation/validation-resp-dto.model";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnChanges {

  @Input()
  quiz: AssignQuizDto = {score: 0, chanceNumber: 0, date: '', notes: '', studentId: 0};

  @Input()
  tempQuestions: Array<TempQuestionDto | null> = [];

  questionIndex: number = 0;

  validations: Array<ValidationRespDto> = [];

  constructor(
    private validationService: ValidationService,
  ) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.tempQuestions.length !== 0){
      this.getQuestionValidations();
    }
  }

  getQuestionValidations(){
    this.validationService.getValidationsByQuiz(this.tempQuestions[0]?.question?.id).subscribe({
      next: (data)=>{
        this.validations = data;
      }
    })
  }


  nextQuestion() {
    if (this.questionIndex < this.tempQuestions.length - 1) {
      this.questionIndex++;
    } else {
    }
  }
}
