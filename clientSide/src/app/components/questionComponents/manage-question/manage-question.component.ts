import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {QuestionDto} from "../../../models/question/question-dto.model";
import {SubjectRespDto} from "../../../models/subject/subject-resp-dto.model";
import {LevelRespDto} from "../../../models/level/level-resp-dto.model";
import {SubjectService} from "../../../services/subject/subject.service";
import {LevelService} from "../../../services/level/level.service";

@Component({
  selector: 'app-manage-question',
  templateUrl: './manage-question.component.html',
  styleUrls: ['./manage-question.component.scss']
})
export class ManageQuestionComponent implements OnInit, OnChanges {

  title = '';

  @Input()
  question: QuestionDto = {};

  @Input()
  operation: 'create' | 'update' = 'create'

  @Output()
  submit: EventEmitter<QuestionDto> = new EventEmitter<QuestionDto>();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  subjects: Array<SubjectRespDto> = [];

  levels: Array<LevelRespDto> = [];

  constructor(
    private subjectService: SubjectService,
    private levelService: LevelService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.operation === 'update') {
      this.title = 'Update Question';
    } else {
      this.title = 'New Question';
    }
    this.subjectService.getSubjects()
      .subscribe({
        next: (data) => {
          this.subjects = data;
        }
      })
    ;
    this.levelService.getLevels()
      .subscribe({
        next: (data) => {
          this.levels = data;
        }
      })
    ;

  }

  isQuestionValid(): boolean {
    return this.hasLength(this.question.questionText) &&
      this.question.numberOfAnswers !== undefined &&
      this.question.numberOfAnswers > 0 &&
      this.question.numberOfCorrectAnswers !== undefined &&
      this.question.numberOfCorrectAnswers > 0 &&
      this.question.questionType !== undefined &&
      this.question.levelId !== undefined &&
      this.question.subjectId !== undefined
  }

  private hasLength(input: string | undefined): boolean {
    return input !== null && input !== undefined && input.length > 0
  }

  onSubmit() {
    this.submit.emit(this.question);
  }

  onCancel() {
    this.cancel.emit();
  }
}
