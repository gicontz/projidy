import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private _loaderService: LoginService) {}

  isLoggedin : boolean = false;

  __login(un: string, pw: string){
    this.isLoggedin = un == "admin" && pw == "admin";
    this._loaderService.setLoader(this.isLoggedin);
    console.log(this.isLoggedin, " ", un, " ", pw);
  }

  ngOnInit() { // this will set the loader value
    this._loaderService.setLoader(this.isLoggedin);
  }

}
