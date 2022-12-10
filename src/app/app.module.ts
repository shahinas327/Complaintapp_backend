import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const myRoutes:Routes =[
  {
    path:"",
    component :AdminloginComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   RouterModule.forRoot(myRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
