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

    constructor() {
      this.weightLeft = 0;
      this.weightRight =  0;
      this.partCount = new Array();

      PARTS.forEach(function(part)  {
        this.partCount.push(new PartCount(part, 0));
      },this);

    }

  calcFeedStock() {

    var emptyWeight = 0;

    this.partCount.forEach(function(pc){

      emptyWeight = +emptyWeight + (+pc.count * +pc.part.weight)

    },this);

    this.weightFeedStock = +this.weightLeft + +this.weightRight - emptyWeight;

  }
}