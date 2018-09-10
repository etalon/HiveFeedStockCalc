import { PartCount } from './partcount';
import { debug } from 'util';
import { Part } from 'src/app/part';

export class SumBuilder {
    weightLeft: number;
    weightRight: number;
    weightFeedStock: number;
    partCount: PartCount[];

    // UNDONE: Date;
    // UNDONE: Hive;

    constructor(parts: Part[]) {
      this.weightLeft = 0;
      this.weightRight =  0;
      this.partCount = new Array();

      parts.forEach(function(part)  {
        this.partCount.push(new PartCount(part, 0));
      }, this);

    }

  calcFeedStock() {

    let emptyWeight = 0;

    this.partCount.forEach(function(pc) {

      emptyWeight = +emptyWeight + (+pc.count * +pc.part.weight);

    }, this);

    this.weightFeedStock = +this.weightLeft + +this.weightRight - emptyWeight;

  }
}
