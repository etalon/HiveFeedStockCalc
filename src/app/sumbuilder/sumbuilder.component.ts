import { Component, OnInit } from '@angular/core';
import { SumBuilder } from '../sumbuilder';
import { PartService } from '../part.service';
import { Part } from 'src/app/part';

@Component({
  selector: 'app-sumbuilder',
  templateUrl: './sumbuilder.component.html',
  styleUrls: ['./sumbuilder.component.css']
})
export class SumbuilderComponent implements OnInit {

  parts: Part[];
  sumBuilder: SumBuilder;

  calcFeedStock(): void {

   this.sumBuilder.calcFeedStock();

  }

  showPartCount(): void {

    alert('to be done');

  }

  createSumBuilder(): void {
    this.partService.getAll()
      .subscribe(parts => this.sumBuilder = new SumBuilder(parts));
  }

  constructor(private partService: PartService) {

    this.createSumBuilder();

  }

  ngOnInit() {
  }

}
