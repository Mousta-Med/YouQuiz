import {Component, OnInit} from '@angular/core';
import {QuestionRespDto} from "../../../models/question/question-resp-dto.model";
import {QuestionService} from "../../../services/question/question.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {QuestionDto} from "../../../models/question/question-dto.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  sidebarVisible = false;

  questions!: Array<QuestionRespDto>;

  question: QuestionDto = {};

  operation: 'create' | 'update' = 'create'

  constructor(
    private questionService: QuestionService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.getAllQuestions();
  }

  private getAllQuestions() {
    this.questionService.getQuestions()
      .subscribe({
        next: (data) => {
          this.questions = data;
        }
      })
    ;
  }

  save(question: QuestionDto) {
    if (question) {
      if (this.operation === 'create') {
        this.questionService.save(question)
          .subscribe({
            next: () => {
              this.getAllQuestions();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Question Created Successfully'
              });
              this.question = {};
            }
          });
      } else if (this.operation === 'update') {
        this.questionService.update(this.question.id, question)
          .subscribe({
            next: () => {
              this.getAllQuestions();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Question Updated Successfully'
              });
            }
          });
      }
      this.sidebarVisible = false;
    }
  }

  deleteQuestion(question: QuestionDto) {
    this.confirmationService.confirm({
      header: 'Delete Question',
      message: 'Are you sure you want to delete this Question you can\'t undo this action after confirmation',
      accept: () => {
        this.questionService.delete(question.id)
          .subscribe({
            next: () => {
              this.getAllQuestions();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Question Deleted Successfully'
              });
            }
          });
      }
    });
  }

  updateQuestion(question: QuestionRespDto) {
    this.question = question;
    this.question.levelId = question.level.id;
    this.question.subjectId = question.subject.id;
    this.sidebarVisible = true;
    this.operation = 'update';

  }

  createQuestion() {
    this.sidebarVisible = true;
    this.operation = 'create';
    this.question = {};
  }

  cancel() {
    this.sidebarVisible = false;
  }
}
