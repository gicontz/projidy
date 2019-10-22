import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../services/general-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() toggled : boolean;

  constructor(private route : ActivatedRoute,
    private _sidebarService: GeneralService,
    private elmnt: ElementRef){}

  ngOnInit(){   

    this._sidebarService.prop.subscribe(prop => { 
      
      this.toggled = prop;

      let header : any = this.elmnt.nativeElement.querySelector("#header-container");    
      console.log(header);
      if (this.toggled) {
        header.classList.add("toggled");
      }else{
        header.classList.remove("toggled");
      }

     });

  }

}
