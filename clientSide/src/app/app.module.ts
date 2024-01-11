import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AvatarModule} from 'primeng/avatar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LevelComponent} from './components/levelComponents/level/level.component';
import {MenuBarComponent} from './components/homeComponents/menu-bar/menu-bar.component';
import {MenuItemComponent} from './components/homeComponents/menu-item/menu-item.component';
import {HeaderBarComponent} from './components/homeComponents/header-bar/header-bar.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SidebarModule} from "primeng/sidebar";
import {ManageLevelComponent} from './components/levelComponents/manage-level/manage-level.component';
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {LevelService} from "./services/level/level.service";
import {HttpClientModule} from "@angular/common/http";
import {LevelTableComponent} from './components/levelComponents/level-table/level-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';
import {DashboardComponent} from './components/homeComponents/dashboard/dashboard.component';
import {HomeComponent} from './components/homeComponents/home/home.component';
import {RouterModule} from "@angular/router";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {StatsComponent} from './components/homeComponents/stats/stats.component';
import {MediaComponent} from './components/mediaComponents/media/media.component';
import {CardModule} from "primeng/card";
import {MediaCardComponent} from './components/mediaComponents/media-card/media-card.component';
import {ManageMediaComponent} from './components/mediaComponents/manage-media/manage-media.component';
import {ResponseComponent} from './components/responseComponents/response/response.component';
import {ManageResponseComponent} from './components/responseComponents/manage-response/manage-response.component';
import {SubjectComponent} from './components/subjectComponents/subject/subject.component';
import {ManageSubjectComponent} from './components/subjectComponents/manage-subject/manage-subject.component';
import {QuestionComponent} from './components/questionComponents/question/question.component';
import {ManageQuestionComponent} from './components/questionComponents/manage-question/manage-question.component';
import {SubjectTableComponent} from './components/subjectComponents/subject-table/subject-table.component';
import {QuestionTableComponent} from './components/questionComponents/question-table/question-table.component';
import {QuestionService} from "./services/question/question.service";
import {SubjectService} from "./services/subject/subject.service";
import {MediaService} from "./services/media/media.service";
import {ResponseService} from "./services/response/response.service";
import {DropdownModule} from "primeng/dropdown";
import {QuizComponent} from './components/quizComponents/quiz/quiz.component';
import {QuizDataViewComponent} from './components/quizComponents/quiz-data-view/quiz-data-view.component';
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import { ManageQuizComponent } from './components/quizComponents/manage-quiz/manage-quiz.component';
import { ResponseTableComponent } from './components/responseComponents/response-table/response-table.component';
import { ValidationComponent } from './components/validationComponents/validation/validation.component';
import { ManageValidationComponent } from './components/validationComponents/manage-validation/manage-validation.component';
import { ValidationTableComponent } from './components/validationComponents/validation-table/validation-table.component';
import {InputSwitchModule} from "primeng/inputswitch";
import { ChatComponent } from './components/studentComponents/chat/chat.component';
import {DialogModule} from "primeng/dialog";
import { AssignQuizComponent } from './components/quizComponents/assign-quiz/assign-quiz.component';
import { UnAssignQuizComponent } from './components/quizComponents/un-assign-quiz/un-assign-quiz.component';
import { TempQuestionComponent } from './components/quizComponents/temp-question/temp-question.component';
import { ManageTempQuestionComponent } from './components/quizComponents/manage-temp-question/manage-temp-question.component';
import { StudentComponent } from './components/studentComponents/student/student.component';
import { ChatsComponent } from './components/studentComponents/chats/chats.component';
import { StudentQuizComponent } from './components/studentComponents/student-quiz/student-quiz.component';
import { PlayQuizComponent } from './components/studentComponents/play-quiz/play-quiz.component';
import { QuizQuestionComponent } from './components/studentComponents/quiz-question/quiz-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    MenuBarComponent,
    MenuItemComponent,
    HeaderBarComponent,
    ManageLevelComponent,
    LevelTableComponent,
    PagenotfoundComponent,
    DashboardComponent,
    HomeComponent,
    StatsComponent,
    MediaComponent,
    MediaCardComponent,
    ManageMediaComponent,
    ResponseComponent,
    ManageResponseComponent,
    SubjectComponent,
    ManageSubjectComponent,
    QuestionComponent,
    ManageQuestionComponent,
    SubjectTableComponent,
    QuestionTableComponent,
    QuizComponent,
    QuizDataViewComponent,
    ManageQuizComponent,
    ResponseTableComponent,
    ValidationComponent,
    ManageValidationComponent,
    ValidationTableComponent,
    ChatComponent,
    AssignQuizComponent,
    UnAssignQuizComponent,
    TempQuestionComponent,
    ManageTempQuestionComponent,
    StudentComponent,
    ChatsComponent,
    StudentQuizComponent,
    PlayQuizComponent,
    QuizQuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AvatarModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    SidebarModule,
    InputTextModule,
    TableModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule,
    CardModule,
    DropdownModule,
    DataViewModule,
    RatingModule,
    TagModule,
    InputSwitchModule,
    DialogModule,
    ReactiveFormsModule
  ],
  providers: [
    LevelService,
    QuestionService,
    SubjectService,
    MediaService,
    ResponseService,
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
