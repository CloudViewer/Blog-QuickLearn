import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class QuickTransferService {

  constructor(private titleService: Title) { }

  public openService = () => {
    return new Promise((resolve) => {
      resolve({ name: '异步回调' });
    })
  }

  public setComponentTitle = (title: string) => {
    title == title.trim() || '';
    title == '' || !title ? this.titleService.setTitle('') : this.titleService.setTitle(title);
  }

}
