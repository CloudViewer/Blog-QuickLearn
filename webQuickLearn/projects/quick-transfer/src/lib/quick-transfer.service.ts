import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuickTransferService {

  constructor(private router: Router) { }

  public redirectToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }


}
