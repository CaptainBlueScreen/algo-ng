import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortComponent } from './sort.component';

import { SortRoutingModule } from './sort-routing.module';
import { CanvasComponent } from './canvas/canvas.component';


@NgModule({
  declarations: [
    SortComponent,
    CanvasComponent
  ],
  imports: [
    CommonModule,
    SortRoutingModule
  ]
})
export class SortModule { }
