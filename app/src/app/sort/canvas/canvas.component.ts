import { Component, OnInit, ElementRef, NgZone, OnDestroy, Input} from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
// import * as p5 from 'p5';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, OnDestroy {
  @Input() arr:number[];
  // private canvas: p5;
  private readonly viewportChange = this.viewportRuler
    .change(200)
    .subscribe(() => this.ngZone.run(() => this.setSize()));

  constructor(
    private el: ElementRef,
    private readonly viewportRuler: ViewportRuler,
    private readonly ngZone: NgZone
  ) {
  }

  ngOnInit() {
    // console.log("OnInit");
    // this.canvas = new p5(p => {
    //   let x = 200;
    //   let y = 100;

    //   p.setup = () => {
    //     p.createCanvas(500, 500);
    //   };

    //   p.draw = () => {
    //     p.background(0);
    //     p.fill(255);
    //     p.rect(x, y, 50, 50);
    //   };
    // }, 
    // this.el.nativeElement);

    // this.setSize();
  }

  ngOnDestroy() {
    this.viewportChange.unsubscribe();
  }

  private setSize() {
    const { width, height } = this.viewportRuler.getViewportSize();
    // this.canvas.resizeCanvas(width - 10, height - 10);
  }
}
