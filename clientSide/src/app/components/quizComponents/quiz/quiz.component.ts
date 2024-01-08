import {Component, OnInit} from '@angular/core';
import {QuizRespDto} from "../../../models/quiz/quiz-resp-dto.model";
import {QuizDto} from "../../../models/quiz/quiz-dto.model";
import {QuizService} from "../../../services/quiz/quiz.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {AssignQuizService} from "../../../services/assignQuiz/assign-quiz.service";
import {AssignQuizDto} from "../../../models/assign-quiz-dto.model";
import {StudentDto} from "../../../models/student-dto.model";
import {StudentService} from "../../../services/student/student.service";
import {TempQuestionDto} from "../../../models/temp-question-dto.model";
import {TempQuestionService} from "../../../services/tempQuestion/temp-question.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  sidebarVisible = false;

  visible = false;

  quizzes: Array<QuizRespDto> = [];

  assignQuizzes: Array<AssignQuizDto> = [];

  quiz: QuizDto = {};

  operation: 'create' | 'update' | 'questions' = 'create';

  assignQuiz: AssignQuizDto = {score: 0, chanceNumber: 0, date: '', notes: '', quizId: 0, studentId: 0};

  operationTitle: string = '';

  students: Array<StudentDto | undefined> = [];
  dialogVisible: boolean = false;
  tempQuestions: TempQuestionDto[] = [];

  constructor(
    private quizService: QuizService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private assignQuizService: AssignQuizService,
    private studentService: StudentService,
    private tempQuestionService: TempQuestionService,
  ) {
  }

  ngOnInit() {
    this.getAllQuizs();
    this.getAllStudents();
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
    this.visible = false;
  }

  createAssignStudent(quiz: any) {
    this.operation = 'create'
    this.operationTitle = 'Assign Quiz'
    this.visible = true;
    this.quiz = quiz;
    this.getAllStudents();
    this.assignQuiz = {score: 0, chanceNumber: 0, date: '', notes: '', quizId: 0, studentId: 0};
  }

  saveAssignQuiz(assignQuiz: AssignQuizDto) {
    this.assignQuiz = assignQuiz;
    this.assignQuiz.quizId = this.quiz.id;
    this.assignQuizService.save(this.assignQuiz).subscribe({
      next: () => {
        this.getAllQuizs();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Student Assigned Successfully'
        });
      }
    });
    this.cancel();
  }

  createUnAssignStudent(quiz: QuizRespDto) {
    this.findAssignQuizsByQuizId(quiz.id);
    this.operationTitle = 'UnAssign Quiz'
    this.operation = 'update'
    this.quiz = quiz;
  }

  getAllQuizs() {
    this.quizService.getQuizs()
      .subscribe({
        next: (data) => {
          this.quizzes = data;
        }
      })
    ;
  }

   findAssignQuizsByQuizId(quizId: number | undefined) {
    this.assignQuizService.findAssignQuizsByQuizId(quizId).subscribe({
      next: (data) => {
        this.assignQuizzes = data;
        // this.students = []
        // for (let assignQuiz of this.assignQuizzes) {
        //   this.students.push(assignQuiz.student);
        // }
        this.visible = true;
      }
    })
  }

  getAllStudents() {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      }
    });
  }


  deleteAssignQuiz(assignQuiz: AssignQuizDto) {
      this.confirmationService.confirm({
        header: 'UnAssign Quiz',
        message: 'Are you sure you want to UnAssign this Quiz you can\'t undo this action after confirmation',
        accept: () => {
          this.assignQuizService.delete(assignQuiz.id)
            .subscribe({
              next: () => {
                this.findAssignQuizsByQuizId(this.quiz.id);
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: 'Quiz UnAssigned Successfully'
                });
              }
            });
        }
      });
  }
  removeTempQuestion(tempQuestion: TempQuestionDto) {
    this.confirmationService.confirm({
      header: 'Remove Question',
      message: 'Are you sure you want to Remove this Question you can\'t undo this action after confirmation',
      accept: () => {
        this.tempQuestionService.delete(tempQuestion.id)
          .subscribe({
            next: () => {
              this.findTempQuestionByQuizId(this.quiz.id);
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Question removed Successfully'
              });
            }
          });
      }
    });
  }

  saveTempQuestion(tempQuestion: TempQuestionDto) {
    tempQuestion.quizId = this.quiz.id;
    this.tempQuestionService.save(tempQuestion).subscribe({
      next: () => {
        this.findTempQuestionByQuizId(this.quiz.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Question Assigned Successfully'
        });
      }
    });
    this.cancelTempQuestion();
  }

   findTempQuestionByQuizId(quizId: number | undefined) {
    this.tempQuestionService.findTempQuestionByQuizId(quizId).subscribe({
      next: (data) => {
        this.tempQuestions = data;
        this.visible = true;
      }
    })
  }

  cancelTempQuestion(){
    this.dialogVisible = false
  }

  createTempQuestion() {
    this.operation = 'questions';
    this.dialogVisible = true;
  }
  tempQuestionList(quiz: QuizRespDto) {
    this.findTempQuestionByQuizId(quiz.id)
    this.operationTitle = 'Assign Question To Quiz';
    this.operation = 'questions';
    this.quiz = quiz;
    this.visible = true;
  }

}
