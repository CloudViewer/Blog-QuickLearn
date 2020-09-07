import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http"
import { HttpHandle } from './http-handle';
import { MessageHandle } from './message-handle';
import { ErrorLevel } from './error-level.enum';
import { Error } from './error';

@Injectable({
  providedIn: 'root'
})
export class QuickTransferService {
  // 连接模式
  private connectModel: string = 'http';

  private httpHandle: HttpHandle;

  constructor(private titleService: Title, private http: HttpClient) { }

  public setComponentTitle = (title: string) => {
    title == title.trim() || '';
    title == '' || !title ? this.titleService.setTitle('') : this.titleService.setTitle(title);
  }


  /**
   * 错误处理
   */
  private error: (error: Error) => void;
  /**
   * 发生错误要执行的方法
   * @param fun 
   */
  public onError(fun: (error: Error) => void): QuickTransferService {
    this.error = fun;
    return this;
  }


  /**
   * 连接加载
   */
  private loading: () => void;
  public onLoading(fun: () => void): QuickTransferService {
    this.loading = fun;
    return this;
  }

  /**
   * 连接完成后的加载关闭
   */
  private loaddone: () => void;
  public onLoaddone(fun: () => void): QuickTransferService {
    this.loaddone = fun;
    return this;
  }



  /** ============================================
   *   websocket连接独有的事件
   *  ============================================
   */
  private connected: () => void;
  /**
   * 使用Websocket连接时，连接成功执行的方法 fun
   * @param fun 
   */
  public onConnected(fun: () => void): QuickTransferService {
    this.connected = fun;
    return this;
  }

  private closed: () => void;
  /**
   * 使用Websocket连接时，连接关闭后要执行的方法 fun
   * @param fun 
   */
  public onClosed(fun: () => void): QuickTransferService {
    this.closed = fun;
    return this;
  }

  private publicMessage: (data: any) => void;
  /**
   * 使用Websocket连接时，收到公共信息（id=0）要执行的方法 fun
   * @param fun 
   */
  public onPublicMessage(fun: (data: any) => void): QuickTransferService {
    this.publicMessage = fun;
    return this;
  }


  public init(config: { websocketUrl?: string, httpUrl?: string }): void {
    if (config.websocketUrl) {
      console.log('初始化Websocket连接');
    }

    if (config.httpUrl) {
      this.httpHandle = new HttpHandle(this.http, config.httpUrl);
      this.httpHandle.onError((error: Error) => {
        this.error && this.error(error);
      }).onLoading(() => {
        this.loading && this.loading();
      }).onLoaddone(() => {
        this.loaddone && this.loaddone();
      })
    }
  }



  public send(action: string, data: {}): MessageHandle {
    let errorFun: (friendlyMessage: string, detailMessage: string) => MessageHandle = (friendlyMessage: string, detailMessage: string) => {
      let messageHandle = new MessageHandle(0);
      setTimeout(() => {
        messageHandle.fireError({ errorLevel: ErrorLevel.SYSTEM, friendlyMessage: friendlyMessage, detailMessage: detailMessage });
      }, 20);
      return messageHandle;
    }
    switch (this.connectModel) {
      case 'websocket':
        return;
      case 'http':
        return this.httpHandle ? this.httpHandle.send(action, data) : errorFun('连接错误', 'Http未初始化');
      default:
        return errorFun('连接错误', `未定义的ConnectModel:${this.connectModel}`);
    }
  }




}
