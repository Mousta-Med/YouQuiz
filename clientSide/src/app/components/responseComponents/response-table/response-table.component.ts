import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ResponseRespDto} from "../../../models/response/response-resp-dto.model";
import {ResponseDto} from "../../../models/response/response-dto.model";

@Component({
  selector: 'app-response-table',
  templateUrl: './response-table.component.html',
  styleUrls: ['./response-table.component.scss']
})
export class ResponseTableComponent {

  @Input()
  responses!: Array<ResponseRespDto>;

  @Output()
  delete: EventEmitter<ResponseDto> = new EventEmitter<ResponseDto>();

  @Output()
  update: EventEmitter<ResponseRespDto> = new EventEmitter<ResponseRespDto>();

  ngOnInit() {
  }

  onDelete(response: ResponseDto) {
    this.delete.emit(response)
  }

  onUpdate(response: ResponseRespDto) {
    this.update.emit(response)
  }
}
