import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickTransferService {

  constructor() { }

  public openService() {
    return new Promise((resolve) => {
      resolve({name:'异步回调'});
    })
  }


}
