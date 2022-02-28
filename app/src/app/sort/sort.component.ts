import { Component, OnInit, ElementRef, NgZone, Renderer2, OnDestroy} from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
import { ViewportRuler } from '@angular/cdk/scrolling';


import * as p5 from 'p5';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit, OnDestroy {

  // resizeObservable$: Observable<Event>
  // resizeSubscription$: Subscription

  private canvas: p5;
  private width: number;
  private height: number;
  private readonly viewportChange = this.viewportRuler
    .change(200)
    .subscribe(() => this.ngZone.run(() => this.setSize()));

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private readonly viewportRuler: ViewportRuler,
    private readonly ngZone: NgZone
  ) {
  }

  ngOnInit() {

    // this.resizeObservable$ = fromEvent(window, 'resize')
    // this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
    //   console.log('event: ', evt)
    // })
    console.log("OnInit");
    this.canvas = new p5(p => {
      let x = 200;
      let y = 100;

      p.setup = () => {
        p.createCanvas(500, 500);
      };

      p.draw = () => {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
      };
    }, 
    this.el.nativeElement);

    this.setSize();
  }

  ngOnDestroy() {
    // this.resizeSubscription$.unsubscribe()
    this.viewportChange.unsubscribe();
  }

  private setSize() {
    const { width, height } = this.viewportRuler.getViewportSize();
    this.width = width;
    this.height = height;
    this.canvas.resizeCanvas(width - 10, height - 10);
  }
}
