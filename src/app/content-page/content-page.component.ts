import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {
  @Input() isloggedin : boolean;

  constructor(private _loaderService: LoginService) {}

  ngOnInit() {
    this._loaderService.loader.subscribe(load => { 
      this.isloggedin = load;
     });
  }

}
