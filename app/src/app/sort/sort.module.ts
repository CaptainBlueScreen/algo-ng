import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    SortRoutingModule
  ]
})
export class SortModule { }
