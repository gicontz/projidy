import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
  host:{
    '[class.dash-page]' : 'true'
  }
})
export class NewsfeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
