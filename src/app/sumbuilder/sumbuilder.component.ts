import { Component, OnInit } from '@angular/core';
import { SumBuilder } from '../sumbuilder';

@Component({
  selector: 'app-sumbuilder',
  templateUrl: './sumbuilder.component.html',
  styleUrls: ['./sumbuilder.component.css']
})
export class SumbuilderComponent implements OnInit {
  
  calc(): void{

    this.sumBuilder.weightFeedStock = +this.sumBuilder.weightLeft + +this.sumBuilder.weightRight;
  
  }

    sumBuilder: SumBuilder = {
      weightLeft: 0,
      weightRight: 0,
      weightFeedStock: 0
    };

  constructor() { }

  ngOnInit() {
  }

}
