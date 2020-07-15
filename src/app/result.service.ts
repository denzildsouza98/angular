import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/result"
  }

  public getAllResult():Observable<Result[]>{
    return this.http.get<Result[]>(this.url);
  }
}
