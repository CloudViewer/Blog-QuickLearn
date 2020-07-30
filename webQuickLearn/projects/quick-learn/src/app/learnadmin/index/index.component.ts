import { Component, OnInit } from '@angular/core';
import { NzDrawerService, NzModalService, NzMenuItemDirective } from 'ng-zorro-antd';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],

})
export class IndexComponent implements OnInit {



  themeColor: string = '#1890ff'
  menuData: any[];              // 菜单数据
  links: any[];                 // 链接
  style: string = '0 0 240px';  // 左侧菜单栏布局 0 0 240px; 默认宽度200px 不增长 不缩小
  isCollapsed: boolean = false; // 控制菜单缩进



  constructor(private drawerService: NzDrawerService, private modalService: NzModalService, private router: Router) { }


  ngOnInit() {
    this.drawInit();
  }

  /**
   * 数据初始化
   */
  drawInit() {

    // 每次初始化都进行清空防止数据重复
    this.links = [];

    // 获取当前地址
    const nowLink = this.router.url.slice(1, this.router.url.length);
    console.log(nowLink)
    const menus = [
      {
        title: '主页',
        mid: 1,
        fid: 0,
        icon: {
          type: 'home',
          theme: ''
        },
        lev: 1,
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
        lev: 1,
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
            lev: 2,
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
            lev: 2,
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
        lev: 1,
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
            lev: 2,
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
            lev: 2,
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
        lev: 1,
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
            lev: 2,
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
            lev: 2,
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
        lev: 1,
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
            lev: 2,
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
            lev: 2,
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
        lev: 1,
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
            lev: 2,
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
            lev: 2,
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
        lev: 1,
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
            lev: 2,
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
            lev: 2,
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
        lev: 1,
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
            lev: 2,
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
            lev: 2,
            routerLink: 'learnadmin/clear/cache',
            children: [
              {
                title: '清除-1',
                mid: 23,
                fid: 22,
                icon: {
                  type: '',
                  theme: ''
                },
                lev: 3,
                routerLink: 'learnadmin/clear/cache',
                children: [
                  {
                    title: '清除-2',
                    mid: 24,
                    fid: 23,
                    icon: {
                      type: '',
                      theme: ''
                    },
                    lev: 4,
                    routerLink: 'learnadmin/clear/cache',
                    children: [],
                    isSelected: false,
                    isDisabled: false,
                  }
                ],
                isSelected: false,
                isDisabled: false,
              }
            ],
            isSelected: false,
            isDisabled: false,
          }
        ],
        isOpen: false,
        isDisabled: false,
      }
    ];

    // 查找当前菜单的地址 返回this.links [{mid:xx,fid:xx,link:'xx'}]
    this.findAllLinksRS(menus);


    let linkObj = this.findByLink(this.links, nowLink);


    // 通过fid 找到对应的父级菜单
    this.menuData = this.findByFidRS(menus, linkObj.fid);
  }

  /**
   * 子菜单按钮点击
   * @param fid 
   */
  itemMenuClick(fid: number) {
    this.nodeManage(this.menuData, fid);
  }

  /**
   * 节点处理
   * @param menus 
   * @param fid 
   */
  nodeManage(menus: any[], fid: number) {
    fid == 0 ? this.zeroManage(menus, fid) : this.fidManage(menus, fid);
  }

  /**
   * fid 处理
   * @param menus 
   * @param fid 
   */
  fidManage(menus: any[], fid: number) {
    // TODO 待优化()...
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].mid == fid) {
        menus[i].color = this.themeColor;
      } else {
        menus[i].color = '';
        this.fidManage(menus[i].children, menus[i].fid);
      }
    }
  }

  menuClick(event:NzMenuItemDirective){
    console.log(event)
  }

  /**
   * 当 fid 为一级菜单时的处理
   * @param menus 
   * @param fid 
   */
  zeroManage(menus: any[], fid: number) {
    // 给每个一级菜单颜色置空
    menus.forEach(item => {
      if (item.children.length > 0) {
        item.color = '';
        this.zeroManage(item.children, fid)
      }
    });
  }


  /**
   * 根据菜单id查找
   * @param menus 菜单数据
   * @param fid 菜单id
   */
  findByFidRS(menus: any[], fid: number) {
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].mid == fid) {
        menus[i].isOpen = true;
        menus[i].color = this.themeColor;
      }
    }
    return menus;
  }

  /**
   * 获取菜单所以菜单链接
   * @param menus 菜单数据
   */
  findAllLinksRS(menus: any[]) {
    menus.forEach(menu => {
      menu.children.length > 0 ? this.findAllLinksRS(menu.children) : this.links.push({ mid: menu.mid, fid: menu.fid, link: menu.routerLink });
    });
  }

  /**
   * 根据链接查找
   * @param link 
   */
  findByLink(links: any[], link: string) {
    for (let i = 0; i < links.length; i++) {
      if (link.indexOf(links[i].link) != -1) {
        return links[i];
      }
    }
  }

  /**
   * 菜单设置
   */
  doMenuSetting() {
    this.isCollapsed = this.isCollapsed ? false : true;
    this.style = this.isCollapsed ? '0 0 90px' : '0 0 240px'
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
