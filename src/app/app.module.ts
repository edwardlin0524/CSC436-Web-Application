import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRequestComponent } from './travel-request/travel-request.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path: 'FlightPrice', component: TravelRequestComponent},
  {path: 'About', component: AboutComponent}

  ];
@NgModule({
  declarations: [
    AppComponent,
    TravelRequestComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
