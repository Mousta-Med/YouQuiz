import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../../../services/subject/subject.service";
import {QuestionService} from "../../../services/question/question.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  subjectsLength!: number;
  questionsLength!: number;

  constructor(
    private subjectService: SubjectService,
    private questionService: QuestionService,
    // private studentService: StudentService,
    // private quizService: QuizService
  ) {
  }

  ngOnInit(): void {
    this.subjectService.getLength.subscribe((length) => {
      this.subjectsLength = length;
    });
    this.questionService.getLength.subscribe((length) => {
      this.questionsLength = length;
    });
  }
}
