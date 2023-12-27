import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {QuizDto} from "../../../models/quiz/quiz-dto.model";
import {SubjectRespDto} from "../../../models/subject/subject-resp-dto.model";
import {LevelRespDto} from "../../../models/level/level-resp-dto.model";
import {SubjectService} from "../../../services/subject/subject.service";
import {LevelService} from "../../../services/level/level.service";

@Component({
  selector: 'app-manage-quiz',
  templateUrl: './manage-quiz.component.html',
  styleUrls: ['./manage-quiz.component.scss']
})
export class ManageQuizComponent {

  title = '';

  @Input()
  quiz: QuizDto = {};

  @Input()
  operation: 'create' | 'update' = 'create'

  @Output()
  submit: EventEmitter<QuizDto> = new EventEmitter<QuizDto>();

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
      this.title = 'Update Quiz';
    } else {
      this.title = 'New Quiz';
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

  // isQuizValid(): boolean {
  //   return this.hasLength(this.quiz.quizText) &&
  //     this.quiz.numberOfAnswers !== undefined &&
  //     this.quiz.numberOfAnswers > 0 &&
  //     this.quiz.numberOfCorrectAnswers !== undefined &&
  //     this.quiz.numberOfCorrectAnswers > 0 &&
  //     this.quiz.quizType !== undefined &&
  //     this.quiz.levelId !== undefined &&
  //     this.quiz.subjectId !== undefined
  // }

  private hasLength(input: string | undefined): boolean {
    return input !== null && input !== undefined && input.length > 0
  }

  onSubmit() {
    this.submit.emit(this.quiz);
  }

  onCancel() {
    this.cancel.emit();
  }
}