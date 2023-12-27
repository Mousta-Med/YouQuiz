import {Component, OnInit} from '@angular/core';
import {ValidationRespDto} from "../../../models/validation/validation-resp-dto.model";
import {ValidationDto} from "../../../models/validation/validation-dto.model";
import {ValidationService} from "../../../services/validation/validation.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit{
  sidebarVisible = false;

  validations!: Array<ValidationRespDto>;

  validation: ValidationDto = {};

  operation: 'create' | 'update' = 'create'

  constructor(
    private validationService: ValidationService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.getAllValidations();
  }

  getAllValidations() {
    this.validationService.getValidations()
      .subscribe({
        next: (data) => {
          this.validations = data;
          console.log(this.validations)
        }
      })
  }

  save(validation: ValidationDto) {
    if (validation) {
      if (this.operation === 'create') {
        this.validationService.save(validation)
          .subscribe({
            next: () => {
              this.getAllValidations();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Validation Created Successfully'
              });
              this.validation = {};
            }
          });
      } else if (this.operation === 'update') {
        this.validationService.update(this.validation.id, validation)
          .subscribe({
            next: () => {
              this.getAllValidations();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Validation Updated Successfully'
              });
            }
          });
      }
      this.sidebarVisible = false;
    }
  }

  deleteValidation(validation: ValidationDto) {
    this.confirmationService.confirm({
      header: 'Delete Validation',
      message: 'Are you sure you want to delete this Validation you can\'t undo this action after confirmation',
      accept: () => {
        this.validationService.delete(validation.id)
          .subscribe({
            next: () => {
              this.getAllValidations();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Validation Deleted Successfully'
              });
            }
          });
      }
    });
  }

  updateValidation(validation: ValidationDto) {
    this.sidebarVisible = true;
    this.operation = 'update';
    this.validation = validation;
  }

  createValidation() {
    this.sidebarVisible = true;
    this.operation = 'create';
    this.validation = {};
  }

  cancel() {
    this.sidebarVisible = false;
  }
}
