import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http"
   
@Injectable({
  providedIn: 'root'
})
export class QuickTransferService {
  private connectType: string = 'http';

  constructor(private titleService: Title, private http: HttpClient) { }


  public setComponentTitle = (title: string) => {
    title == title.trim() || '';
    title == '' || !title ? this.titleService.setTitle('') : this.titleService.setTitle(title);
  }




}
