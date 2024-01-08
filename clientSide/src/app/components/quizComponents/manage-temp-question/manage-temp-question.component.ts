import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {QuestionDto} from "../../../models/question/question-dto.model";
import {TempQuestionDto} from "../../../models/temp-question-dto.model";
import {QuestionService} from "../../../services/question/question.service";

@Component({
  selector: 'app-manage-temp-question',
  templateUrl: './manage-temp-question.component.html',
  styleUrls: ['./manage-temp-question.component.scss']
})
export class ManageTempQuestionComponent implements OnInit{

  questions: Array<QuestionDto | undefined > = [];

  @Output()
  submit: EventEmitter<TempQuestionDto> = new EventEmitter<TempQuestionDto>();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  tempQuestionForm: FormGroup = new FormGroup({
    questionId:  new FormControl('0',[Validators.required]),
    time: new FormControl('0', [Validators.required]),
  });
  constructor(
    private questionService: QuestionService
  ) {
  }

  ngOnInit() {
    this.getAllQuestions();
  }


  private getAllQuestions() {
    this.questionService.getQuestions()
      .subscribe({
        next: (data) => {
          this.questions = data;
        }
      })
    ;
  }

  onSubmit() {
    this.submit.emit(this.tempQuestionForm.value);
    this.tempQuestionForm.reset();
  }

  onCancel() {
    this.cancel.emit();
    this.tempQuestionForm.reset();
  }
}
