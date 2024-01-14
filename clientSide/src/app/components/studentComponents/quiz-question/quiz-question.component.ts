import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AssignQuizDto} from "../../../models/assign-quiz-dto.model";
import {TempQuestionDto} from "../../../models/temp-question-dto.model";
import {ValidationService} from "../../../services/validation/validation.service";
import {ValidationRespDto} from "../../../models/validation/validation-resp-dto.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  answerFormGroup: FormGroup = new FormGroup({
    played: new FormControl('0', [Validators.required]),
    validationId: new FormControl('0', [Validators.required]),
    assignQuizId: new FormControl('0', [Validators.required]),
  });

  constructor(
    private validationService: ValidationService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tempQuestions.length !== 0) {
      this.answerFormGroup.setValue({
        played: 0,
        validationId:0,
        assignQuizId: this.quiz.id
      });
      this.questionIndex = 0;
      this.getQuestionValidations();
    }
  }

  getQuestionValidations() {
    this.validationService.getValidationsByQuiz(this.tempQuestions[this.questionIndex]?.question?.id).subscribe({
      next: (data) => {
        this.validations = data;
      }
    })
  }


  nextQuestion() {
    if (this.questionIndex < this.tempQuestions.length - 1) {
      this.questionIndex++;
      this.getQuestionValidations();
      if (this.tempQuestions[this.questionIndex]?.time !== 0) {
        this.startTimer();
      }
    } else {
      alert('quiz End');
    }
  }

  // timer() {
  //   const currentQuestion = this.tempQuestions[this.questionIndex];
  //   if (currentQuestion && currentQuestion.time !== undefined) {
  //     setTimeout(() => {
  //     }, currentQuestion.time * 1000);
  //   }
  // }

  timerId: any;

  startTimer() {
    const currentQuestion = this.tempQuestions[this.questionIndex];
      if (currentQuestion && currentQuestion.time !== undefined) {
        this.timerId = setInterval(() => {
          currentQuestion.time--;
          if (currentQuestion.time <= 0) {
            this.questionIndex++;
            clearInterval(this.timerId);
          }
        }, 1000);
      }
  }


}
