import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuickTransferService, Error, ErrorLevel } from 'projects/quick-transfer/src/public-api';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'quick-learn',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  showLoading: boolean;
  connectModel: string = 'http';

  constructor(private message: NzMessageService, private router: Router, private quickTran: QuickTransferService) { }

  ngOnInit(): void {
    // TODO：目前只是对token的测试，后续调整
    console.log('token设置')
    localStorage.setItem("QL-TOKEN", 'hello-shdjs');
    this.quickTran
      .onConnected(() => {
        this.connectModel = 'websocket';
      })
      .onClosed(() => {
        this.connectModel = 'http';
      })
      .onError((error: Error) => {
        switch (error.errorLevel) {
          case ErrorLevel.SESSION_TIMEOUT:
            this.message.create('error', "会话超时，请重新登录！");
            break;
          default:
            this.message.create('error', error.friendlyMessage);
            break;
        }
      })
      .onLoading(() => {
        this.showLoading = true;
      })
      .onLoaddone(() => {
        this.showLoading = false;
      })
      .init({
        websocketUrl: 'ws://127.0.0.1:8080/ws',
        httpUrl: 'http://127.0.0.1:8096/bs'
      });
  }
}
