import {Component} from '@angular/core';
import {ResponseRespDto} from "../../../models/response/response-resp-dto.model";
import {ResponseDto} from "../../../models/response/response-dto.model";
import {ResponseService} from "../../../services/response/response.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent {
  sidebarVisible = false;

  responses!: Array<ResponseRespDto>;

  response: ResponseDto = {};

  operation: 'create' | 'update' = 'create'

  constructor(
    private responseService: ResponseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.getAllResponses();
  }

  private getAllResponses() {
    this.responseService.getResponses()
      .subscribe({
        next: (data) => {
          this.responses = data;
        }
      })
    ;
  }

  save(response: ResponseDto) {
    if (response) {
      if (this.operation === 'create') {
        this.responseService.save(response)
          .subscribe({
            next: () => {
              this.getAllResponses();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Response Created Successfully'
              });
              this.response = {};
            }
          });
      } else if (this.operation === 'update') {
        this.responseService.update(this.response.id, response)
          .subscribe({
            next: () => {
              this.getAllResponses();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Response Updated Successfully'
              });
            }
          });
      }
      this.sidebarVisible = false;
    }
  }

  deleteResponse(response: ResponseDto) {
    this.confirmationService.confirm({
      header: 'Delete Response',
      message: 'Are you sure you want to delete this Response you can\'t undo this action after confirmation',
      accept: () => {
        this.responseService.delete(response.id)
          .subscribe({
            next: () => {
              this.getAllResponses();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Response Deleted Successfully'
              });
            }
          });
      }
    });
  }

  updateResponse(response: ResponseRespDto) {
    this.response = response;
    // this.response.levelId = response.level.id;
    // this.response.subjectId = response.subject.id;
    this.sidebarVisible = true;
    this.operation = 'update';

  }

  createResponse() {
    this.sidebarVisible = true;
    this.operation = 'create';
    this.response = {};
  }

  cancel() {
    this.sidebarVisible = false;
  }
}
