import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {

  private _loaderSource:any = new BehaviorSubject<any>({});
  public loader = this._loaderSource.asObservable();

  //set the loader value
  setLoader(loader){
    this._loaderSource.next(loader);
  }
}
