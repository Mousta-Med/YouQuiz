import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ValidationDto} from "../../../models/validation/validation-dto.model";
import {LevelDto} from "../../../models/level/level-dto.model";

@Component({
  selector: 'app-validation-table',
  templateUrl: './validation-table.component.html',
  styleUrls: ['./validation-table.component.scss']
})
export class ValidationTableComponent {


  @Input()
  validations!: Array<ValidationDto>;

  @Output()
  delete: EventEmitter<LevelDto> = new EventEmitter<LevelDto>();

  @Output()
  update: EventEmitter<LevelDto> = new EventEmitter<LevelDto>();


  onDelete(validation: ValidationDto) {
    this.delete.emit(validation)
  }

  onUpdate(validation: ValidationDto) {
    this.update.emit(validation)
  }
}
