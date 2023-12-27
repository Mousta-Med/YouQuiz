import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LevelDto} from "../../../models/level/level-dto.model";

@Component({
  selector: 'app-manage-level',
  templateUrl: './manage-level.component.html',
  styleUrls: ['./manage-level.component.scss']
})
export class ManageLevelComponent implements OnChanges {

  title = '';

  @Input()
  level: LevelDto = {};

  @Input()
  operation: 'create' | 'update' = 'create'

  @Output()
  submit: EventEmitter<LevelDto> = new EventEmitter<LevelDto>();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.operation === 'update') {
      this.title = 'Update Level';
    } else {
      this.title = 'New Level';
    }
  }

  get isLevelValid(): boolean {
    return this.hasLength(this.level.description) &&
      this.level.maxPoints !== undefined &&
      this.level.maxPoints > 0 &&
      this.level.minPoints !== undefined &&
      this.level.minPoints > 0
  }

  private hasLength(input: string | undefined): boolean {
    return input !== null && input !== undefined && input.length > 0
  }

  onSubmit() {
    this.submit.emit(this.level);
  }

  onCancel() {
    this.cancel.emit();
  }

}
