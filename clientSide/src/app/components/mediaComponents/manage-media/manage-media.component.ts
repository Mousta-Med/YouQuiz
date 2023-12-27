import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {MediaDto} from "../../../models/media/media-dto.model";
import {QuestionDto} from "../../../models/question/question-dto.model";
import {QuestionService} from "../../../services/question/question.service";
import {MediaService} from "../../../services/media/media.service";


@Component({
  selector: 'app-manage-media',
  templateUrl: './manage-media.component.html',
  styleUrls: ['./manage-media.component.scss']
})
export class ManageMediaComponent implements OnInit, OnChanges {

  title: string = 'New Media';

  disabled: boolean = true;

  @Input()
  media: MediaDto = {};

  @Input()
  operation: 'create' | 'update' = 'create';

  @Output()
  submit: EventEmitter<MediaDto> = new EventEmitter<MediaDto>();

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();

  questions: Array<QuestionDto> = [];

  constructor(
    private questionService: QuestionService
  ) {
  }

  handleFile(event: any) {
    this.media.mediaFile = event.target.files[0];
    this.media.mediaType = this.media.mediaFile?.type.split('/')[0].toUpperCase();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.questionService.getQuestions()
      .subscribe({
        next: (data) => {
          this.questions = data;
        }
      })
    ;
  }

  //TODO
  // when I return to the option : 'select an option' this function should return true
  validData() {
    this.disabled = !(this.media.mediaFile !== undefined && this.media.questionId !== undefined);
  }


  onSubmit() {
    this.submit.emit(this.media);
  }

  onCancel() {
    this.cancel.emit();
  }


}
