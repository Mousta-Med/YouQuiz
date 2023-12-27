import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionRespDto} from "../../../models/question/question-resp-dto.model";
import {QuestionDto} from "../../../models/question/question-dto.model";

@Component({
  selector: 'app-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent implements OnInit {

  @Input()
  questions!: Array<QuestionRespDto>;

  @Output()
  delete: EventEmitter<QuestionDto> = new EventEmitter<QuestionDto>();

  @Output()
  update: EventEmitter<QuestionRespDto> = new EventEmitter<QuestionRespDto>();

  ngOnInit() {
  }

  onDelete(question: QuestionDto) {
    this.delete.emit(question)
  }

  onUpdate(question: QuestionRespDto) {
    this.update.emit(question)
  }
}
