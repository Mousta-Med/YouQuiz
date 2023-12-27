import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MediaDto} from "../../../models/media/media-dto.model";

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {

  @Input()
  media: MediaDto = {};

  @Input()
  mediaIndex = 0;

  @Output()
  delete: EventEmitter<MediaDto> = new EventEmitter<MediaDto>();

  @Output()
  update: EventEmitter<MediaDto> = new EventEmitter<MediaDto>();

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.media);
  }

  onUpdate() {
    this.update.emit(this.media);
  }
}
