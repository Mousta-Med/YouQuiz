import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StudentDto} from "../../../models/student-dto.model";
import {AssignQuizDto} from "../../../models/assign-quiz-dto.model";

@Component({
  selector: 'app-un-assign-quiz',
  templateUrl: './un-assign-quiz.component.html',
  styleUrls: ['./un-assign-quiz.component.scss']
})
export class UnAssignQuizComponent {

  @Input()
  students!: Array<StudentDto | undefined>;

  @Input()
  assignQuizzes!: Array<AssignQuizDto | undefined>;

  @Output()
  delete: EventEmitter<AssignQuizDto> = new EventEmitter<AssignQuizDto>();

  ngOnInit() {
  }

  onDelete(assignQuiz: AssignQuizDto) {
    this.delete.emit(assignQuiz)
  }

}
