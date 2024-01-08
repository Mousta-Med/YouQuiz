import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LevelComponent} from './components/levelComponents/level/level.component';
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {DashboardComponent} from "./components/homeComponents/dashboard/dashboard.component";
import {HomeComponent} from "./components/homeComponents/home/home.component";
import {MediaComponent} from "./components/mediaComponents/media/media.component";
import {ResponseComponent} from "./components/responseComponents/response/response.component";
import {QuestionComponent} from "./components/questionComponents/question/question.component";
import {SubjectComponent} from "./components/subjectComponents/subject/subject.component";
import {QuizComponent} from "./components/quizComponents/quiz/quiz.component";
import {ValidationComponent} from "./components/validationComponents/validation/validation.component";
import {ChatComponent} from "./components/studentComponents/chat/chat.component";
import {StudentComponent} from "./components/studentComponents/student/student.component";
import {ChatsComponent} from "./components/studentComponents/chats/chats.component";

const routes: Routes = [
  {
    path: 'teacher',
    component: HomeComponent,
    children: [
      {
        path: 'levels',
        component: LevelComponent
      },
      {
        path: 'subjects',
        component: SubjectComponent
      },
      {
        path: 'questions',
        component: QuestionComponent
      },
      {
        path: 'medias',
        component: MediaComponent
      },
      {
        path: 'responses',
        component: ResponseComponent
      },
      {
        path: 'validations',
        component: ValidationComponent
      },
      {
        path: 'quizzes',
        component: QuizComponent
      },
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: 'chats',
        component: ChatsComponent,
      },
      {
        path: 'chat/:userId',
        component: ChatComponent,
      }
    ]
  },
  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
