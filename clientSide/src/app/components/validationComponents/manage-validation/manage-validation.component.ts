import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ValidationDto} from "../../../models/validation/validation-dto.model";
import {ValidationRespDto} from "../../../models/validation/validation-resp-dto.model";
import {ValidationService} from "../../../services/validation/validation.service";
import {QuestionRespDto} from "../../../models/question/question-resp-dto.model";
import {ResponseRespDto} from "../../../models/response/response-resp-dto.model";
import {QuestionService} from "../../../services/question/question.service";
import {ResponseService} from "../../../services/response/response.service";

@Component({
  selector: 'app-manage-validation',
  templateUrl: './manage-validation.component.html',
  styleUrls: ['./manage-validation.component.scss']
})
export class ManageValidationComponent implements OnChanges, OnInit {

  title = '';

  @Input()
  validation!: ValidationDto;

  @Input()
  operation: 'create' | 'update' = 'create'

  @Output()
  submit: EventEmitter<ValidationDto> = new EventEmitter<ValidationDto>();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  questions: Array<QuestionRespDto> = [];

  responses: Array<ResponseRespDto> = [];

  constructor(
    private questionService: QuestionService,
    private responseService: ResponseService
  ) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.operation === 'update') {
      this.title = 'Update Validation';
    } else {
      this.title = 'New Validation';
    }
    this.responseService.getResponses()
      .subscribe({
        next: (data) => {
          this.responses = data;
        }
      })
    ;
    this.questionService.getQuestions()
      .subscribe({
        next: (data) => {
          this.questions = data;
        }
      })
    ;

  }

  isValidationValid(): boolean {
    return this.validation.points !== undefined &&
      this.validation.points >= 0 &&
      this.validation.responseId !== undefined &&
      this.validation.questionId !== undefined
  }

  onSubmit() {
    this.submit.emit(this.validation);
  }

  onCancel() {
    this.cancel.emit();
  }

}
