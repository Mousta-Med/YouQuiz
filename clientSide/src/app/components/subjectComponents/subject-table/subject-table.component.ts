import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SubjectRespDto} from "../../../models/subject/subject-resp-dto.model";
import {LevelDto} from "../../../models/level/level-dto.model";
import {SubjectDto} from "../../../models/subject/subject-dto.model";

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent {

  @Input()
  subjects!: Array<SubjectDto>;

  @Output()
  delete: EventEmitter<LevelDto> = new EventEmitter<LevelDto>();

  @Output()
  update: EventEmitter<LevelDto> = new EventEmitter<LevelDto>();


  onDelete(subject: SubjectDto) {
    this.delete.emit(subject)
  }

  onUpdate(subject: SubjectDto) {
    this.update.emit(subject)
  }
}
