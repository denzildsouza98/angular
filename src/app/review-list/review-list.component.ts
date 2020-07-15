import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';
import { AnswerService } from '../answer.service';
import { Answer } from '../answer';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  private quiz:Quiz[];
  private answer:Answer[];
  constructor(private service:QuizService,private aservice:AnswerService) { }

  ngOnInit() {
    this.service.getAllQuiz().subscribe(res=>{this.quiz=res});
    this.aservice.getAllAnswers().subscribe(res=>{this.answer=res});
  }

}
