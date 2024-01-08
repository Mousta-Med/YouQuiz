import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizDto} from "../../../models/quiz/quiz-dto.model";
import {QuizRespDto} from "../../../models/quiz/quiz-resp-dto.model";

@Component({
  selector: 'app-quiz-data-view',
  templateUrl: './quiz-data-view.component.html',
  styleUrls: ['./quiz-data-view.component.scss']
})
export class QuizDataViewComponent {

  @Input()
  quizzes!: Array<QuizRespDto>;

  getSeverity(answersAccess: boolean) {
    switch (answersAccess) {
      case true:
        return 'success';
      // case false:
      //   return 'warning';
      case false:
        return 'danger';
      default:
        return null;
    }
  };


  @Output()
  delete: EventEmitter<QuizRespDto> = new EventEmitter<QuizRespDto>();

  @Output()
  update: EventEmitter<QuizRespDto> = new EventEmitter<QuizRespDto>();

  @Output()
  assign: EventEmitter<QuizRespDto> = new EventEmitter<QuizRespDto>();

  @Output()
  unAssign: EventEmitter<QuizRespDto> = new EventEmitter<QuizRespDto>();

  @Output()
  question: EventEmitter<QuizRespDto> = new EventEmitter<QuizRespDto>();
  ngOnInit() {
  }

  onDelete(quiz: QuizDto) {
    this.delete.emit(quiz)
  }

  onUpdate(quiz: QuizRespDto) {
    this.update.emit(quiz)
  }

  onAssign(quiz: QuizDto){
    this.assign.emit(quiz);
  }

  unassigned(quiz: QuizDto){
    this.unAssign.emit(quiz);
  }

  onQuestion(quiz: QuizDto){
    this.question.emit(quiz);
  }

}
