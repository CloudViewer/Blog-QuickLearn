import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class QuickTransferService {
  // 连接模式
  private connectModel: string = 'http';

  constructor(private titleService: Title, private http: HttpClient) { }

  public setComponentTitle = (title: string) => {
    title == title.trim() || '';
    title == '' || !title ? this.titleService.setTitle('') : this.titleService.setTitle(title);
  }


  // webSocket 独有事件
  // /**
  //  * 开启连接要执行的方法
  //  */
  // private connected: () => void;
  // public onConnected(fun: () => void): QuickTransferService {
  //   this.connected = fun;
  //   return this;
  // }


  // /**
  //  * 关闭连接要执行的方法
  //  */
  // private closed: () => void;
  // public onClosed(fun: () => void): QuickTransferService {
  //   this.closed = fun;
  //   return this;
  // }


  





  // 两个服务分别处理HTTP与webSocket请求




}
