import { Component, OnInit, Input } from '@angular/core';
import { } from '@angular/core';
import { LoginService } from '../services/login.service'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
  trigger('openClose', [
    state('open', style({
      opacity: 1
    })),
    state('closed', style({
      opacity: 0,
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ])
  ]
})
export class HeaderComponent implements OnInit {
  @Input() isloggedin : boolean;

  constructor(private _loaderService: LoginService) {}

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(){
    this.toggle();
    this._loaderService.loader.subscribe(load => { 
      this.isloggedin = load;
      this.isOpen = load;
     });
  }

}
