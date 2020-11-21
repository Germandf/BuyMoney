import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesPatisseriesDessertsComponent } from '../app/les-patisseries-desserts/les-patisseries-desserts.component';
import { LesPatisseriesAboutComponent } from '../app/les-patisseries-about/les-patisseries-about.component';
import { LesPatisseriesContactComponent } from './les-patisseries-contact/les-patisseries-contact.component';

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
    path:'contact',
    component: LesPatisseriesContactComponent,
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
