import { Component, OnInit, Input, ElementRef  } from '@angular/core';
import { GeneralService } from '../services/general-service.service'
import { appPages } from '../services/app-pages.service'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  pages: any = appPages.sidebar_pages;
  homepage : string = appPages.homepage;
  toggled : boolean = false;

  constructor(private elmnt: ElementRef, private _loaderService : GeneralService) { }
  
  
  __toggleSidebar(){
    let tglClass : string = "toggled";
    let sidebar : any = this.elmnt.nativeElement.querySelector(".sidebar");
    
    if(sidebar.classList.contains(tglClass)){
      sidebar.classList.remove(tglClass);
      this.toggled = false;
    }
    else{
      sidebar.classList.add(tglClass);
      this.toggled = true;
    }    
    
    this._loaderService.setLoader(this.toggled);
  }

  ngOnInit() {
  }

}
