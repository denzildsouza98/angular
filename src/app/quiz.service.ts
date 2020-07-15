import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url:string;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/quiz";
  }

  public getAllQuiz():Observable<Quiz[]>{
    return this.http.get<Quiz[]>(this.url);
  }
}
