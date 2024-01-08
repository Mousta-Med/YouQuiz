import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {QuizDto} from "../../../models/quiz/quiz-dto.model";
import {SubjectRespDto} from "../../../models/subject/subject-resp-dto.model";
import {SubjectService} from "../../../services/subject/subject.service";
import {TeacherDto} from "../../../models/teacher-dto.model";
import {TeacherService} from "../../../services/teacher/teacher.service";

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
  operation: 'create' | 'update' | 'questions' = 'create'

  @Output()
  submit: EventEmitter<QuizDto> = new EventEmitter<QuizDto>();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  subjects: Array<SubjectRespDto> = [];

  teachers: Array<TeacherDto> = [];

  constructor(
    private subjectService: SubjectService,
    private teacherService: TeacherService
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
    this.teacherService.getTeachers()
      .subscribe({
        next: (data) => {
          this.teachers = data;
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
