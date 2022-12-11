import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoutes:Routes =[
  {
    path:"",
    component :AdminloginComponent
  },
  {
    path:"userlogin",
    component :UserloginComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    UserRegComponent,
    NavbarComponent
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
