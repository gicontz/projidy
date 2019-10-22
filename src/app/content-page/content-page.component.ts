import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {
  isloggedin : boolean = false;
  page : any;
  toggled : boolean;

  constructor(private _loaderService: LoginService,
              private router: Router) {}

  ngOnInit() {
    this._loaderService.loader.subscribe(load => {
      if(typeof(load) == "boolean")
        this.isloggedin = load;
      if(typeof(load) == "object")
        this.router.navigate(["login"]);
     });
  }

}
