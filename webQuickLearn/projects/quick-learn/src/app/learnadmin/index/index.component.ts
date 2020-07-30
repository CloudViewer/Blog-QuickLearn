import { Component, OnInit } from '@angular/core';
import { NzDrawerService, NzModalService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],

})
export class IndexComponent implements OnInit {


  // 左侧菜单栏布局 0 0 240px; 默认宽度200px 不增长 不缩小
  style: string = '0 0 240px';

  // 菜单数据
  menuData: any;

  isCollapsed: boolean = false;


  constructor(private drawerService: NzDrawerService, private modalService: NzModalService, private router: Router) { }


  ngOnInit() {
    this.drawInit();
  }

  /**
   * 数据初始化
   */
  drawInit() {
    const menus = [
      {
        title: '主页',
        mid: 1,
        fid: 0,
        icon: {
          type: 'home',
          theme: ''
        },
        routerParam: 'ADMIN_Home',
        routerLink: 'learnadmin/home',
        children: [],
        isSelected: false,
        isDisabled: false,
      },
      {
        title: '用户管理',
        mid: 2,
        fid: 0,
        icon: {
          type: 'user',
          theme: ''
        },
        routerLink: '',
        children: [
          {
            title: '用户列表',
            mid: 3,
            fid: 2,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_USER_LIST',
            routerLink: 'learnadmin/user/list',
            children: [],
            isSelected: false,
            isDisabled: false,
          },
          {
            title: '待开发...',
            mid: 4,
            fid: 2,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_USER_NONE',
            routerLink: 'learnadmin/user/none',
            children: [],
            isSelected: false,
            isDisabled: false,
          }
        ],
        isOpen: false,
        isDisabled: false,
      },
      {
        title: '博客管理',
        mid: 5,
        fid: 0,
        icon: {
          type: 'form',
          theme: ''
        },
        routerLink: '',
        children: [
          {
            title: '博客列表',
            mid: 6,
            fid: 5,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_BLOG_LIST',
            routerLink: 'learnadmin/blog/list',
            children: [],
            isSelected: false,
            isDisabled: false,
          },
          {
            title: '待审核...',
            mid: 7,
            fid: 5,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_BLOG_AUDIT',
            routerLink: 'learnadmin/blog/audit',
            children: [],
            isSelected: false,
            isDisabled: false,
          }
        ],
        isOpen: false,
        isDisabled: false,
      },
      {
        title: '模板管理',
        mid: 8,
        fid: 0,
        icon: {
          type: 'edit',
          theme: ''
        },
        routerLink: '',
        children: [
          {
            title: '模板列表',
            mid: 9,
            fid: 8,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_TEMPLATE_LIST',
            routerLink: 'learnadmin/template/list',
            children: [],
            isSelected: false,
            isDisabled: false,
          },
          {
            title: '待开发...',
            mid: 10,
            fid: 8,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_TEMPLATE_NONE',
            routerLink: 'learnadmin/template/none',
            children: [],
            isSelected: false,
            isDisabled: false,
          }
        ],
        isOpen: false,
        isDisabled: false,
      },
      {
        title: '广告管理',
        mid: 11,
        fid: 0,
        icon: {
          type: 'notification',
          theme: ''
        },
        routerLink: '',
        children: [
          {
            title: '广告列表',
            mid: 12,
            fid: 11,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_ADVERT_LIST',
            routerLink: 'learnadmin/advert/list',
            children: [],
            isSelected: false,
            isDisabled: false,
          },
          {
            title: '广告审核',
            mid: 13,
            fid: 11,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_ADVERT_AUDIT',
            routerLink: 'learnadmin/advert/audit',
            children: [],
            isSelected: false,
            isDisabled: false,
          }
        ],
        isOpen: false,
        isDisabled: false,
      },
      {
        title: '日志管理',
        mid: 14,
        fid: 0,
        icon: {
          type: 'file',
          theme: ''
        },
        routerLink: '',
        children: [
          {
            title: '登录日志',
            mid: 15,
            fid: 14,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_LOGINLOG_LIST',
            routerLink: 'learnadmin/loginlog/list',
            children: [],
            isSelected: false,
            isDisabled: false,
          },
          {
            title: '操作日志',
            mid: 16,
            fid: 14,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_OPERATELOG_LIST',
            routerLink: 'learnadmin/operatelog/list',
            children: [],
            isSelected: false,
            isDisabled: false,
          }
        ],
        isOpen: false,
        isDisabled: false,
      },
      {
        title: '权限管理',
        mid: 17,
        fid: 0,
        icon: {
          type: 'key',
          theme: ''
        },
        routerLink: '',
        children: [
          {
            title: '账号权限',
            mid: 18,
            fid: 17,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_ADMIN_AUTO',
            routerLink: 'learnadmin/admin/auth',
            children: [],
            isSelected: false,
            isDisabled: false,
          },
          {
            title: '菜单权限',
            mid: 19,
            fid: 17,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_MENU_AUTO',
            routerLink: 'learnadmin/menu/auth',
            children: [],
            isSelected: false,
            isDisabled: false,
          }
        ],
        isOpen: false,
        isDisabled: false,
      },
      {
        title: '其他',
        mid: 20,
        fid: 0,
        icon: {
          type: 'setting',
          theme: ''
        },
        routerLink: '',
        children: [
          {
            title: '账号权限',
            mid: 21,
            fid: 20,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_SYS_SETTING',
            routerLink: 'learnadmin/sys/setting',
            children: [],
            isSelected: false,
            isDisabled: false,
          },
          {
            title: '清除缓存',
            mid: 22,
            fid: 20,
            icon: {
              type: '',
              theme: ''
            },
            routerParam: 'ADMIN_CLEAR_CACHE',
            routerLink: 'learnadmin/clear/cache',
            children: [],
            isSelected: false,
            isDisabled: false,
          }
        ],
        isOpen: false,
        isDisabled: false,
      }
    ];

    this.menuData = menus;
    this.findByRouterRS(menus, this.router.url.slice(1, -1));
  }

  /**
   * 递归查找路由
   */
  findByRouterRS(menus: any[], link: string) {
    console.log(menus);
    console.log(link)

  }

  /**
   * 菜单设置
   */
  doMenuSetting() {
    // this.menuTree.doMenuSetting();
    this.isCollapsed = this.isCollapsed ? false : true;
    this.style = this.isCollapsed ? '0 0 90px' : '0 0 240px'
  }


  subMenuOpenChange(item: any) {
    console.log('click')
    console.log(item)
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
