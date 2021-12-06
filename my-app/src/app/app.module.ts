import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars';
import { DriversComponent } from './drivers';
import { HomeComponent } from './home';
import { TeamsComponent } from './teams';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from "./app.material-module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriversComponent,
    TeamsComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
