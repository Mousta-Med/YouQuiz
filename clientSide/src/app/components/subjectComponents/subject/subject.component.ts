import {Component, OnInit} from '@angular/core';
import {SubjectDto} from "../../../models/subject/subject-dto.model";
import {SubjectService} from "../../../services/subject/subject.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {SubjectRespDto} from "../../../models/subject/subject-resp-dto.model";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  sidebarVisible = false;

  subjects!: Array<SubjectRespDto>;

  subject: SubjectDto = {};

  operation: 'create' | 'update' = 'create'

  constructor(
    private subjectService: SubjectService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.getAllSubjects();
  }

  getAllSubjects() {
    this.subjectService.getSubjects()
      .subscribe({
        next: (data) => {
          this.subjects = data;
        }
      })
  }

  save(subject: SubjectDto) {
    if (subject) {
      if (this.operation === 'create') {
        this.subjectService.save(subject)
          .subscribe({
            next: () => {
              this.getAllSubjects();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Subject Created Successfully'
              });
              this.subject = {};
            }
          });
      } else if (this.operation === 'update') {
        this.subjectService.update(this.subject.id, subject)
          .subscribe({
            next: () => {
              this.getAllSubjects();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Subject Updated Successfully'
              });
            }
          });
      }
      this.sidebarVisible = false;
    }
  }

  deleteSubject(subject: SubjectDto) {
    this.confirmationService.confirm({
      header: 'Delete Subject',
      message: 'Are you sure you want to delete this Subject you can\'t undo this action after confirmation',
      accept: () => {
        this.subjectService.delete(subject.id)
          .subscribe({
            next: () => {
              this.getAllSubjects();
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Subject Deleted Successfully'
              });
            }
          });
      }
    });
  }

  updateSubject(subject: SubjectDto) {
    this.sidebarVisible = true;
    this.operation = 'update';
    this.subject = subject;
  }

  createSubject() {
    this.sidebarVisible = true;
    this.operation = 'create';
    this.subject = {};
  }

  cancel() {
    this.sidebarVisible = false;
  }
}
