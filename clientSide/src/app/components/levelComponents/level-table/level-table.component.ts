import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LevelDto} from "../../../models/level/level-dto.model";

@Component({
  selector: 'app-level-table',
  templateUrl: './level-table.component.html',
  styleUrls: ['./level-table.component.scss']
})
export class LevelTableComponent {

  @Input()
  cols: any;

  @Input()
  data!: Array<LevelDto>;

  @Output()
  delete: EventEmitter<LevelDto> = new EventEmitter<LevelDto>();

  @Output()
  update: EventEmitter<LevelDto> = new EventEmitter<LevelDto>();


  onDelete(id: number) {
    this.delete.emit(this.data.find(x => x.id === id))
  }

  onUpdate(id: number) {
    this.update.emit(this.data.find(x => x.id === id))
  }


}
