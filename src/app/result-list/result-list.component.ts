import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  private result:Result[];
  constructor(private service:ResultService) { }

  ngOnInit() {
    this.service.getAllResult().subscribe(res=>{this.result=res})
  }

}
