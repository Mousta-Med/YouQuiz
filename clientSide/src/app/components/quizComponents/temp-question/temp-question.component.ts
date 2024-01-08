import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TempQuestionDto} from "../../../models/temp-question-dto.model";

@Component({
  selector: 'app-temp-question',
  templateUrl: './temp-question.component.html',
  styleUrls: ['./temp-question.component.scss']
})
export class TempQuestionComponent {

  @Input()
  tempQuestions!: Array<TempQuestionDto | undefined>;

  @Output()
  delete: EventEmitter<TempQuestionDto> = new EventEmitter<TempQuestionDto>();

  ngOnInit() {
  }

  onDelete(tempQuestionDto: TempQuestionDto) {
    this.delete.emit(tempQuestionDto)
  }
}
