import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SubjectDto} from "../../../models/subject/subject-dto.model";
import {SubjectRespDto} from "../../../models/subject/subject-resp-dto.model";
import {SubjectService} from "../../../services/subject/subject.service";

@Component({
  selector: 'app-manage-subject',
  templateUrl: './manage-subject.component.html',
  styleUrls: ['./manage-subject.component.scss']
})
export class ManageSubjectComponent implements OnChanges, OnInit {

  title = '';

  @Input()
  subject!: SubjectDto;

  @Input()
  operation: 'create' | 'update' = 'create'

  @Output()
  submit: EventEmitter<SubjectDto> = new EventEmitter<SubjectDto>();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  subjects: Array<SubjectRespDto> = [];

  constructor(
    private subjectService: SubjectService
  ) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.operation === 'update') {
      this.title = 'Update Subject';
    } else {
      this.title = 'New Subject';
    }
    this.subjectService.getSubjects()
      .subscribe({
        next: (data) => {
          this.subjects = data;
        }
      })
    ;

  }

  isSubjectValid(): boolean {
    return this.hasLength(this.subject.title)
  }

  private hasLength(input: string | undefined): boolean {
    return input !== null && input !== undefined && input.length > 0
  }

  onSubmit() {
    this.submit.emit(this.subject);
  }

  onCancel() {
    this.cancel.emit();
  }
}
