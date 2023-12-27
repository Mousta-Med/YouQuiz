import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ResponseDto} from "../../../models/response/response-dto.model";
import {SubjectRespDto} from "../../../models/subject/subject-resp-dto.model";
import {LevelRespDto} from "../../../models/level/level-resp-dto.model";
import {SubjectService} from "../../../services/subject/subject.service";
import {LevelService} from "../../../services/level/level.service";
import {ResponseRespDto} from "../../../models/response/response-resp-dto.model";

@Component({
  selector: 'app-manage-response',
  templateUrl: './manage-response.component.html',
  styleUrls: ['./manage-response.component.scss']
})
export class ManageResponseComponent implements OnChanges {

  title = '';

  @Input()
  response: ResponseRespDto = {};

  @Input()
  operation: 'create' | 'update' = 'create'

  @Output()
  submit: EventEmitter<ResponseRespDto> = new EventEmitter<ResponseRespDto>();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.operation === 'update') {
      this.title = 'Update Response';
    } else {
      this.title = 'New Response';
    }
  }

  isResponseValid(): boolean {
    return this.hasLength(this.response.response)
  }

  private hasLength(input: string | undefined): boolean {
    return input !== null && input !== undefined && input.length > 3
  }

  onSubmit() {
    this.submit.emit(this.response);
  }

  onCancel() {
    this.cancel.emit();
  }

}
