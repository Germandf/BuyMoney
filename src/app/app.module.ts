import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DessertListComponent } from './dessert-list/dessert-list.component';

import { FormsModule } from '@angular/forms';
import { LesPatisseriesDessertsComponent } from './les-patisseries-desserts/les-patisseries-desserts.component';
import { LesPatisseriesAboutComponent } from './les-patisseries-about/les-patisseries-about.component';
import { DessertCartComponent } from './dessert-cart/dessert-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DessertListComponent,
    LesPatisseriesDessertsComponent,
    LesPatisseriesAboutComponent,
    DessertCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
