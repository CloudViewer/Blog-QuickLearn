import { Component, OnInit, ViewChild } from '@angular/core';
import { NzDrawerService, NzModalService } from 'ng-zorro-antd';
import { MenuComponent } from './menu/menu.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],

})
export class IndexComponent implements OnInit {

  // 引入子组件
  @ViewChild('menuTree', { static: false })
  public menuTree: MenuComponent;

  // 左侧菜单栏布局 0 0 200px; 默认宽度200px 不增长 不缩小
  style: string = '0 0 200px';

  // 菜单数据
  menuData: any;

  isCollapsed: boolean = false;


  constructor(private drawerService: NzDrawerService, private modalService: NzModalService,private router: Router) { }


  ngOnInit() {
   
    // 初始菜单加载
    const menu = [
      {
        mid: 1,
        fid: 0,
        title: '主页',
        icon: {
          type: 'home',
          theme: 'outline'
        },
        code: 'HOME',
        routerUrl: 'learnadmin/home',
        children: [],
        isSubmenu: false,
      },
      {
        mid: 2,
        fid: 0,
        title: '用户管理',
        icon: {
          type: 'user',
          theme: ''
        },
        code: '',
        children: [
          {
            mid: 3,
            fid: 2,
            title: '用户列表',
            icon: {},
            code: 'USER_LIST',
            routerUrl: 'learnadmin/user/list',
            children: [],
            isSubmenu: false,
          },
          {
            mid: 4,
            fid: 2,
            title: '待开发....',
            icon: {},
            code: 'NO',
            routerUrl: 'learnadmin/user/no',
            children: [],
            isSubmenu: false,
          },

        ],
        isSubmenu: true,
      },
      {
        mid: 5,
        fid: 0,
        title: '博客管理',
        icon: {
          type: 'form',
          theme: ''
        },
        code: '',
        children: [
          {
            mid: 6,
            fid: 5,
            title: '博客列表',
            icon: {},
            code: 'BLOG_LIST',
            routerUrl: 'learnadmin/blog/list',
            children: [],
            isSubmenu: false,
          },
          {
            mid: 7,
            fid: 5,
            title: '待审核',
            icon: {},
            code: 'BLOG_AUDIT_LIST',
            routerUrl: 'learnadmin/blog/audit',
            children: [],
            isSubmenu: false,
          },

        ],
        isSubmenu: true,
      },
      {
        mid: 8,
        fid: 0,
        title: '模板管理',
        icon: {
          type: 'edit',
          theme: ''
        },
        code: '',
        children: [
          {
            mid: 9,
            fid: 8,
            title: '模板列表',
            icon: {},
            code: 'TEMPLATE_LIST',
            routerUrl: 'learnadmin/template/list',
            children: [],
            isSubmenu: false,
          },
          {
            mid: 10,
            fid: 8,
            title: '待开发...',
            icon: {},
            code: 'NO',
            routerUrl: 'learnadmin/template/no',
            children: [],
            isSubmenu: false,
          },

        ],
        isSubmenu: true,
      },
      {
        mid: 11,
        fid: 0,
        title: '广告管理',
        icon: {
          type: 'notification',
          theme: ''
        },
        code: '',
        children: [
          {
            mid: 12,
            fid: 11,
            title: '广告列表',
            icon: {},
            code: 'AD_LIST',
            routerUrl: 'learnadmin/advert/list',
            children: [],
            isSubmenu: false,
          },
          {
            mid: 13,
            fid: 11,
            title: '广告审核',
            icon: {},
            code: 'AD_AUDIT',
            routerUrl: 'learnadmin/advert/audit',
            children: [],
            isSubmenu: false,
          },

        ],
        isSubmenu: true,
      },
      {
        mid: 14,
        fid: 0,
        title: '日志管理',
        icon: {
          type: 'file',
          theme: ''
        },
        code: '',
        children: [
          {
            mid: 15,
            fid: 14,
            title: '登录日志',
            icon: {},
            code: 'LOG_LOGIN_LIST',
            routerUrl: 'learnadmin/loginlog/list',
            children: [],
            isSubmenu: false,
          },
          {
            mid: 16,
            fid: 14,
            title: '操作日志',
            icon: {},
            code: 'LOG_OPERATE_LIST',
            routerUrl: 'learnadmin/operatelog/list',
            children: [],
            isSubmenu: false,
          },

        ],
        isSubmenu: true,
      },
      {
        mid: 17,
        fid: 0,
        title: '权限管理',
        icon: {
          type: 'key',
          theme: ''
        },
        code: '',
        children: [
          {
            mid: 18,
            fid: 17,
            title: '管理员权限',
            icon: {},
            code: 'ADMIN_AUTH',
            routerUrl: 'learnadmin/admin/auth',
            children: [],
            isSubmenu: false,
          },
          {
            mid: 19,
            fid: 17,
            title: '菜单权限',
            icon: {},
            code: 'MENU_AUTH',
            routerUrl: 'learnadmin/menu/auth',
            children: [],
            isSubmenu: false,
          },

        ],
        isSubmenu: true,
      },
      {
        mid: 20,
        fid: 0,
        title: '其他',
        icon: {
          type: 'setting',
          theme: ''
        },
        code: '',
        children: [
          {
            mid: 21,
            fid: 20,
            title: '系统设置',
            icon: {},
            code: 'SYS_SETTING',
            routerUrl: 'learnadmin/sys/setting',
            children: [],
            isSubmenu: false,
          },
          {
            mid: 22,
            fid: 20,
            title: '清除缓存',
            icon: {},
            code: 'SYS_CLEAR_CACHE',
            routerUrl: 'learnadmin/clear/cache',
            children: [
              {
                mid: 23,
                fid: 22,
                title: '测试菜单-1',
                icon: {},
                code: 'SYS_CLEAR_CACHE',
                routerUrl: 'learnadmin/clear/cache',
                children: [],
                isSubmenu: false,
              },
              {
                mid: 24,
                fid: 22,
                title: '测试菜单-2',
                icon: {},
                code: 'SYS_CLEAR_CACHE',
                routerUrl: 'learnadmin/clear/cache',
                children: [
                  {
                    mid: 25,
                    fid: 24,
                    title: '测试菜单-2-1',
                    icon: {},
                    code: 'SYS_CLEAR_CACHE',
                    routerUrl: 'learnadmin/clear/cache',
                    children: [],
                    isSubmenu: false,
                  },
                ],
                isSubmenu: true,
              },
            ],
            isSubmenu: true,
          },

        ],
        isSubmenu: true,
      }

    ];
    this.menuData = menu;
    console.log('index..')
    const nowUrl = this.router.url;
    const lastIndex = nowUrl.lastIndexOf('/');
    const urlCode = nowUrl.substring(lastIndex + 1, nowUrl.length);
    console.log(urlCode)
  }

  /**
   * 菜单设置
   */
  doMenuSetting() {
    this.menuTree.doMenuSetting();
    this.isCollapsed = this.menuTree.isCollapsed;
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
