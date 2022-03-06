import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SortComponent } from './sort.component';
import { SortRoutingModule } from './sort-routing.module';
import { CanvasComponent } from './canvas/canvas.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SortComponent,
    CanvasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SortRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SortModule { }
