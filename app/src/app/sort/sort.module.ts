import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortComponent } from './sort.component';

import { SortRoutingModule } from './sort-routing.module';


@NgModule({
  declarations: [
    SortComponent
  ],
  imports: [
    CommonModule,
    SortRoutingModule
  ]
})
export class SortModule { }
