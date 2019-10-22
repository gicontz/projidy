import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host:{
    '[class.dash-page]' : 'true'
  }
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
