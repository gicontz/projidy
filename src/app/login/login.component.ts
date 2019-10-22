import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private _loaderService: LoginService, private router: Router) {}

  isLogin : boolean = false;

  __login(un: string, pw: string){
    this.isLogin = un == "admin" && pw == "admin";
    this._loaderService.setLoader(this.isLogin);
    console.log(this.isLogin, " ", un, " ", pw);
    if (this.isLogin)
      this.router.navigate(['main/dashboard']);
    if (!this.isLogin)
      alert("Wrong username or password!");
  }

  ngOnInit() { // this will set the loader value
    this._loaderService.setLoader(this.isLogin);
  }

}
