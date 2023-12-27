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
  quizzes!: Array<QuizDto>;

  // getSeverity(quiz: QuizRespDto) {
  //   switch (quiz) {
  //     case 'INSTOCK':
  //       return 'success';
  //
  //     case 'LOWSTOCK':
  //       return 'warning';
  //
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //
  //     default:
  //       return null;
  //   }
  // };


  @Input()
  quizs!: Array<QuizRespDto>;

  @Output()
  delete: EventEmitter<QuizDto> = new EventEmitter<QuizDto>();

  @Output()
  update: EventEmitter<QuizRespDto> = new EventEmitter<QuizRespDto>();

  ngOnInit() {
  }

  onDelete(quiz: QuizDto) {
    this.delete.emit(quiz)
  }

  onUpdate(quiz: QuizRespDto) {
    this.update.emit(quiz)
  }
}
