import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  constructor(private api:ApiService)
 username=""
 password=""

 readValues =()=>{
  let data:any= {
    "username":this.username,
    "password":this.password
  }
  this.api.userlogin(data).subscribe(
    (response:any)=>{
      if(response.status=="success"){
        alert("login success")

      }else
      alert("login failed")
      {

      }
    }
  )
 }
}
