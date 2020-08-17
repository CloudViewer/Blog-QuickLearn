import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'quick-learn',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isLogin: boolean = false;

  showLoading: boolean = true;

  connectModel: string = 'http';
  showLoading_TIO: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /**
     *  TODO: 初始化逻辑处理
     *    1、后端是否启动 启动则判断是否登录
     *    2、后端没有启动的情况下应从
     */
    
    if (this.isLogin) {
      clearTimeout(this.showLoading_TIO)
      this.showLoading = true;
      this.connectModel = 'websocket';
      this.showLoading_TIO = setTimeout(() => {
        this.showLoading = false;
      }, 2000);

    } else {
      this.showLoading = true;
      this.connectModel = 'http';
      this.router.navigateByUrl('/login');
      // this.router.navigateByUrl('/learnadmin');
    }
  }
}
