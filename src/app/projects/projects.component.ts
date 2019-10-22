import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  host:{
    '[class.dash-page]' : 'true'
  }
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
