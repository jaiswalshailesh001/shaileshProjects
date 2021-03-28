import { Component, OnInit } from '@angular/core';
import { Login } from './model/login.model';
import * as data from 'src/app/data/credential.json'
import { UtilityService } from '../utility/utility.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login;
  loginInvalid=false;
  savedCredential :Login;
  constructor(private utilityService :UtilityService ,
     public auth:AuthService,
     private router :Router) { }

  ngOnInit() {
    this.savedCredential = (data as any).default;
    this.login = new Login();
  }

  onSubmit(){
    if(this.login.email == this.savedCredential.email && this.login.password == this.savedCredential.password){
      this.loginInvalid = false;
      // redirect to blogs components
      this.utilityService.openSnackBar("Login Successfully!!","");
      this.auth.setToken(this.savedCredential.email + this.savedCredential.password)
      this.router.navigate(["/blogs"])
    } else{
      this.loginInvalid = true;
    }
  }
}
