import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  menu: Array<MenuItem> = [
    {label: 'Home', icon: 'pi pi-home', routerLink: '/teacher'},
    {label: 'Level', icon: 'pi pi-chart-bar', routerLink: 'levels'},
    {label: 'Media', icon: 'pi pi-cloud-upload', routerLink: 'medias'},
    {label: 'Subject', icon: 'pi pi-book', routerLink: 'subjects'},
    {label: 'Question', icon: 'pi pi-question', routerLink: 'questions'},
    {label: 'Response', icon: 'pi pi-check', routerLink: 'responses'},
    {label: 'Validation', icon: 'pi pi-check-circle', routerLink: 'validations'},
    {label: 'Quiz', icon: 'pi pi-question-circle', routerLink: 'quizzes'},
    {label: 'Settings', icon: 'pi pi-cog', routerLink: 'settings'}
  ];


}
