import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  lengths: number[] = [ 50, 100, 500, 1000, 5000, 10000 ];
  length = this.lengths[0];
  arr: number[];

  changeLength() {
    this.arr = Array.from({length: this.length}, (v,k) => k+1);
  }

  randomize() {
    for(let i=0; i< this.arr.length; i++){
      this.swap(i, Math.floor(Math.random()*this.length))
    }
  }

  swap(i:number, j:number) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j]
    this.arr[j] = temp;
  }

}
