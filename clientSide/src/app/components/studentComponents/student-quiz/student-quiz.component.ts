import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuizRespDto} from "../../../models/quiz/quiz-resp-dto.model";
import {AssignQuizService} from "../../../services/assignQuiz/assign-quiz.service";
import {AssignQuizDto} from "../../../models/assign-quiz-dto.model";
import {TempQuestionDto} from "../../../models/temp-question-dto.model";
import {TempQuestionService} from "../../../services/tempQuestion/temp-question.service";

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.scss']
})
export class StudentQuizComponent implements OnInit{

  quizzes: Array<AssignQuizDto> = [];

  quiz: AssignQuizDto = {score: 0, studentId: 0, date: '', notes: '', chanceNumber: 0};


  dialogVisible: boolean = false;

  tempQuestions: Array<TempQuestionDto> = [];
  constructor(
    private assignQuizService: AssignQuizService,
    private tempQuestionService: TempQuestionService
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

  findTempQuestionByQuizId(id: number|undefined) {
    this.tempQuestionService.findTempQuestionByQuizId(id).subscribe({
      next: (data) => {
        this.tempQuestions = data;
      }
    })
  }

  playQuiz(quiz: AssignQuizDto) {
    this.findTempQuestionByQuizId(quiz.quiz?.id);
    this.quiz = quiz;
    this.dialogVisible = true;
  }
}
