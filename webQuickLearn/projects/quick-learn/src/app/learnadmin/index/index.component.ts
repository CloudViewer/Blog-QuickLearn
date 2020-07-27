import { Component, OnInit } from '@angular/core';
import { NzDrawerService, NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
// import { QuickTransferComponent } from 'projects/quick-transfer/src/public-api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],

})
export class IndexComponent implements OnInit {

  isCollapsed: boolean = false;  // 控制菜单的变化
  style: string = '0 0 200px';  // 左侧菜单栏布局 0 0 200px; 默认宽度200px 不增长 不缩小
  isHomeSelected: boolean = false;

  constructor(private drawerService: NzDrawerService, private modalService: NzModalService, private router: Router) { }


  ngOnInit() {
    // 根据当前Url控制主页菜单是否选中
    // console.log(this.trans)
    const nowUrl = this.router.url;
    const lastIndex = nowUrl.lastIndexOf('/');
    const urlCode = nowUrl.substring(lastIndex + 1, nowUrl.length);
    urlCode == 'home' ? this.isHomeSelected = true : this.isHomeSelected = false;
  }


  /**
   * 菜单点击
   * 根据code 路由到不同地址
   * @param code 
   */
  menuClick(code: string) {
    // TODO: 后续添加实现...
    console.log(code)
    switch (code) {
      case 'HOME':
        // this.trans.redirectToUrl('learnadmin/home');
        this.redirect('learnadmin/home');
        break;
      case 'USER_LIST':
        this.redirect('learnadmin/user/list');
        break;
      case 'BLOG_LIST':
        this.redirect('learnadmin/blog/list');
        break;
      case 'BLOG_AUDIT_LIST':
        this.redirect('learnadmin/blog/audit');
        break;
      default:
        this.redirect('learnadmin');
        break;
    }

  }

  /**
   * 根据传入的路由地址重定向到当前路由地址
   * @param url 
   */
  redirect(url: string) {
    this.router.navigateByUrl(url);
  }



  /**
   * 左侧比例设置
   */
  doMenuSetting() {
    this.isCollapsed = this.isCollapsed ? false : true;
    this.style = this.isCollapsed ? '0 0 90px' : '0 0 200px'
  }

  /**
   * 弹出个人信息框
   */
  openUserInfo() {
    // TODO: 头部导航栏的信息实现(待处理)...

    // console.log('headClick()');
    // const drawerRef = this.drawerService.create<UserInfoComponent, { val: any }, any>({
    //   nzTitle: '用户信息',
    //   nzWidth: '640px',
    //   nzMaskClosable: false, // 点击蒙层是否允许关闭
    //   nzContent: UserInfoComponent,
    //   nzContentParams: {
    //     val: 'obj'
    //   }
    // });

    // // 关闭回调
    // drawerRef.afterClose.subscribe(data => {
    //   console.log(data)
    // });
  }

}
