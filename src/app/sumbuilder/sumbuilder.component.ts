import { Component, OnInit } from '@angular/core';
import { SumBuilder } from '../sumbuilder';

@Component({
  selector: 'app-sumbuilder',
  templateUrl: './sumbuilder.component.html',
  styleUrls: ['./sumbuilder.component.css']
})
export class SumbuilderComponent implements OnInit {
  
  calcFeedStock(): void{

   this.sumBuilder.calcFeedStock();
  
  }

  showPartCount(): void {

    alert("to be done");

  }

  sumBuilder = new SumBuilder ;

  constructor() { }

  ngOnInit() {
  }

}
