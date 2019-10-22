import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GeneralService {

  private _loaderSource:any = new BehaviorSubject<any>({});
  public prop = this._loaderSource.asObservable();

  constructor() { }

  setLoader(prop){
    this._loaderSource.next(prop);
  }
}
