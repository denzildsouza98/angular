import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {
  private answer:Answer;
  private answers:Answer[];
  constructor(private service:AnswerService,private router : Router) { this.answer=new Answer();}
  
  addAnswer(){
    //this.service.addAnswer(this.answer).subscribe(res=>this.gotoAnimalList());
    this.service.addAnswer(this.answer).subscribe(res=>this.answer=res);
  }

  // gotoAnimalList(){
  //   this.answer=new Answer;
  //   this.router.navigate([''])
  // }
  ngOnInit() {
    this.service.getAllAnswers().subscribe(res=>this.answers=res);
  }

}
