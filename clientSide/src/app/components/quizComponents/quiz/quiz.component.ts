import { Component } from '@angular/core';
import {QuizRespDto} from "../../../models/quiz/quiz-resp-dto.model";
import {QuizDto} from "../../../models/quiz/quiz-dto.model";
import {QuizService} from "../../../services/quiz/quiz.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  sidebarVisible = false;

  quizs!: Array<QuizRespDto>;

  quiz: QuizDto = {};

  operation: 'create' | 'update' = 'create'

  constructor(
    private quizService: QuizService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.getAllQuizs();
  }

  private getAllQuizs() {
    this.quizService.getQuizs()
      .subscribe({
        next: (data) => {
          this.quizs = data;
        }
      })
    ;
  }

  save(quiz: QuizDto) {
    if (quiz) {
      if (this.operation === 'create') {
        this.quizService.save(quiz)
          .subscribe({
            next: () => {
              this.getAllQuizs();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Quiz Created Successfully'
              });
              this.quiz = {};
            }
          });
      } else if (this.operation === 'update') {
        this.quizService.update(this.quiz.id, quiz)
          .subscribe({
            next: () => {
              this.getAllQuizs();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Quiz Updated Successfully'
              });
            }
          });
      }
      this.sidebarVisible = false;
    }
  }

  deleteQuiz(quiz: QuizDto) {
    this.confirmationService.confirm({
      header: 'Delete Quiz',
      message: 'Are you sure you want to delete this Quiz you can\'t undo this action after confirmation',
      accept: () => {
        this.quizService.delete(quiz.id)
          .subscribe({
            next: () => {
              this.getAllQuizs();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Quiz Deleted Successfully'
              });
            }
          });
      }
    });
  }

  updateQuiz(quiz: QuizRespDto) {
    this.quiz = quiz;
    // this.quiz.id = quiz..id;
    // this.quiz.subjectId = quiz.subject.id;
    this.sidebarVisible = true;
    this.operation = 'update';

  }

  createQuiz() {
    this.sidebarVisible = true;
    this.operation = 'create';
    this.quiz = {};
  }

  cancel() {
    this.sidebarVisible = false;
  }

}
