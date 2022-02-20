import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { SortComponent } from './sort/sort.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'sort', component: SortComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
