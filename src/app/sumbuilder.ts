import { PartCount } from "./partcount";
import { PARTS} from './mock-parts';
import { debug } from "util";

export class SumBuilder {
    weightLeft: number;
    weightRight: number;
    weightFeedStock: number;
    partCount: PartCount[];
    
    // UNDONE: Date;
    // UNDONE: Hive;

    constructor(){
      weightLeft: 0;
      weightRight: 0;

      PARTS.forEach(part => function(part)  {

        console.log("Helloi");
        console.log(this.partCount);

        //this.partCount.add(new PartCount(part, 0));
  
      }, this);

    }


  calcFeedStock() {

  this.weightFeedStock = +this.weightLeft + +this.weightRight;

  }
}