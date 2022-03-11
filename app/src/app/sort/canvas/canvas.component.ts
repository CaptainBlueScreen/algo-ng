import { Component, OnInit, ElementRef, Input} from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @Input() arr:number[];

  constructor( private el: ElementRef ) { }

  ngOnInit() {
    new p5(p => {

      p.setup = () => {
        p.createCanvas(500, 500);
      };

      p.draw = () => {
        p.background(0);
        this.drawPoints(p);
      };

      p.windowResized = () => {
        console.log("resized");
      }
    },

    this.el.nativeElement);
  }
  

  drawPoints(p: any) {
    p.strokeWeight(5);
    p.stroke('purple');
    
    if (this.arr)
    {
      for(let i = 0; i<this.arr.length; i++) {
        p.point(i, this.arr[i]);
      }
    }
  }
}
