import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ReviewListComponent } from './review-list/review-list.component';
import { AnswerService } from './answer.service';
import { QuizService } from './quiz.service';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultService } from './result.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    CreateAnswerComponent,
    ReviewListComponent,
    ResultListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AnswerService,QuizService,ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
