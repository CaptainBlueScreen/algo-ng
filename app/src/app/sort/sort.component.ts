import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  length: number = 10;
  arr: number[];

  ngOnInit(): void {
    this.changeLength();
  }

  changeLength() {
    this.arr = Array.from({length: this.length}, (v,k) => k+1);
  }

}
