import { SumBuilder } from "../sumbuilder";
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partcounts',
  templateUrl: './partcounts.component.html',
  styleUrls: ['./partcounts.component.css']
})

export class PartcountsComponent implements OnInit {

  @Input() sumBuilder: SumBuilder;

  constructor() { }

  calcFeedStock(): void{

    this.sumBuilder.calcFeedStock();
   
   }

  ngOnInit() {

  }

}
