import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AssignQuizDto} from "../../../models/assign-quiz-dto.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../services/student/student.service";
import {StudentDto} from "../../../models/student-dto.model";

@Component({
  selector: 'app-assign-quiz',
  templateUrl: './assign-quiz.component.html',
  styleUrls: ['./assign-quiz.component.scss']
})
export class AssignQuizComponent implements OnChanges{

  @Input()
  students: Array<StudentDto | undefined > = [];

  @Input()
  assignQuiz!: AssignQuizDto;

  @Output()
  submit: EventEmitter<AssignQuizDto> = new EventEmitter<AssignQuizDto>();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  assignQuizForm: FormGroup = new FormGroup({
    score: new FormControl('0', [Validators.required]),
    chanceNumber:  new FormControl('0',[Validators.required]),
    notes:  new FormControl('',[Validators.required]),
    date:  new FormControl('', [Validators.required]),
    studentId:  new FormControl('0', [Validators.required, Validators.min(1)])
  });

  constructor(
  ) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.assignQuizForm.reset();
    if (this.assignQuiz){
      this.assignQuizForm.setValue({
        score: this.assignQuiz.score,
        chanceNumber: this.assignQuiz.chanceNumber,
        notes: this.assignQuiz.notes,
        date: this.assignQuiz.date,
        studentId: this.assignQuiz.studentId
      });
    }
  }

  onSubmit() {
    this.assignQuiz = this.assignQuizForm.value;
    this.submit.emit(this.assignQuiz);
    this.assignQuizForm.reset();
  }

  onCancel() {
    this.cancel.emit();
    this.assignQuizForm.reset();
  }
}
