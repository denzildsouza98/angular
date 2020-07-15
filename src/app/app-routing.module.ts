import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ResultListComponent } from './result-list/result-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'getAllQuiz',component:QuizListComponent},
  {path:'addAnswer',component:CreateAnswerComponent},
  {path:'getAllReview',component:ReviewListComponent},
  {path:'getAllResult',component:ResultListComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
