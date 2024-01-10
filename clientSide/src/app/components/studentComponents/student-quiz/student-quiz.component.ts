import { Component } from '@angular/core';
import {QuizRespDto} from "../../../models/quiz/quiz-resp-dto.model";

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.scss']
})
export class StudentQuizComponent {

  quizzes!: Array<QuizRespDto>;
}
