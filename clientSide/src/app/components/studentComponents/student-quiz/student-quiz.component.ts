import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuizRespDto} from "../../../models/quiz/quiz-resp-dto.model";
import {AssignQuizService} from "../../../services/assignQuiz/assign-quiz.service";
import {AssignQuizDto} from "../../../models/assign-quiz-dto.model";

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.scss']
})
export class StudentQuizComponent implements OnInit{

  quizzes: Array<AssignQuizDto> = [];

  quiz: AssignQuizDto = {score: 0, studentId: 0, date: '', notes: '', chanceNumber: 0};


  dialogVisible: boolean = false;

  constructor(
    private assignQuizService: AssignQuizService,
  ) {
  }
  ngOnInit() {
    this.assignQuizService.getAssignQuizs().subscribe({
      next: (data)=> {
        this.quizzes = data;
        console.log(this.quizzes)
      }
    })
  }

  playQuiz(quiz: AssignQuizDto) {
    this.dialogVisible = true;
  }
}
