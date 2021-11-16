import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars';
import { DriversComponent } from './drivers';
import { HomeComponent } from './home';
import { TeamsComponent } from './teams';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
