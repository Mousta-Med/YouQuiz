import {Component, Input, OnInit} from '@angular/core';
import {LevelService} from "../../../services/level/level.service";
import {LevelDto} from "../../../models/level/level-dto.model";
import {ConfirmationService, MessageService} from "primeng/api";

interface Column {
  field?: string;
  header?: string;
}

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  sidebarVisible = false;

  cols!: Column[];

  levels!: Array<LevelDto>;

  level: LevelDto = {};

  operation: 'create' | 'update' = 'create'

  constructor(
    private levelService: LevelService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.getAllLevels();
    this.cols = [
      {field: 'description', header: 'Description'},
      {field: 'maxPoints', header: 'Max Points'},
      {field: 'minPoints', header: 'Min Points'},
      {field: 'action', header: 'Actions'}
    ];
  }

  private getAllLevels() {
    this.levelService.getLevels()
      .subscribe({
        next: (data) => {
          this.levels = data;
        }
      })
  }

  save(level: LevelDto) {
    if (level) {
      if (this.operation === 'create') {
        this.levelService.save(level)
          .subscribe({
            next: () => {
              this.getAllLevels();
              this.messageService.add({severity: 'success', summary: 'Success', detail: 'Level Created Successfully'});
              this.level = {};
            }
          });
      } else if (this.operation === 'update') {
        this.levelService.update(this.level.id, level)
          .subscribe({
            next: () => {
              this.getAllLevels();
              this.messageService.add({severity: 'success', summary: 'Success', detail: 'Level Updated Successfully'});
            }
          });
      }
      this.sidebarVisible = false;
    }
  }

  deleteLevel(level: LevelDto) {
    this.confirmationService.confirm({
      header: 'Delete Level',
      message: 'Are you sure you want to delete this Level you can\'t undo this action after confirmation',
      accept: () => {
        this.levelService.delete(level.id)
          .subscribe({
            next: () => {
              this.getAllLevels();
              this.messageService.add({severity: 'success', summary: 'Success', detail: 'Level Deleted Successfully'});
            }
          });
      }
    });
  }

  updateLevel(level: LevelDto) {
    this.sidebarVisible = true;
    this.operation = 'update';
    this.level = level;
  }

  createLevel() {
    this.sidebarVisible = true;
    this.operation = 'create';
    this.level = {};
  }

  cancel() {
    this.sidebarVisible = false;
  }
}
