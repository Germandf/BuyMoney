import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesPatisseriesDessertsComponent } from '../app/les-patisseries-desserts/les-patisseries-desserts.component';
import { LesPatisseriesAboutComponent } from '../app/les-patisseries-about/les-patisseries-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'desserts',
    pathMatch: 'full',
  },
  {
    path:'desserts',
    component: LesPatisseriesDessertsComponent,
  },
  {
    path:'about',
    component: LesPatisseriesAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
