import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes : Router) { }
  username:string;password : string;
  ngOnInit() {
  }

  login(){
    if(this.username == undefined || this.username == ""){
      alert("Username is required");
      return false;
    }
    else if(this.password == undefined || this.password == ""){
      alert("Password is required");
      return false;
    }
    else{
      this.routes.navigateByUrl('/dashboard');
    }
  }

}
