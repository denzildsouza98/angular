import { Injectable } from '@angular/core';
import { Answer } from './answer';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private url:string;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/answer";
  }

  public addAnswer(answer:Answer){
    return this.http.put<Answer>(this.url,answer);
  }

  public getAllAnswers(){
    return this.http.get<Answer[]>(this.url);
  }
}
