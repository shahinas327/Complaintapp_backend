import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
 username = ""
 password = ""
 
 readValues =()=>{
  let data:any= {
    "username":this.username=="admin"&&this.password=="1234"
  }
 }
 
 }

