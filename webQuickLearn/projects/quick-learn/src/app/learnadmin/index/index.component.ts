import { Component, OnInit, HostListener } from '@angular/core';
import { NzModalService, NzDrawerService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { UtilsService } from '../../learncomm/utils.service';
import { QuickTransferService } from 'projects/quick-transfer/src/public-api';
import { EventManager } from '@angular/platform-browser';
import { UserInfoComponent } from './user-info/user-info.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],

})
export class IndexComponent implements OnInit {


  private timeMsg: string = '上午好';
  private themeColor: string = '#1890ff'
  private menuData: any[];                // 菜单数据
  private style: string = '0 0 200px';    // 左侧菜单栏布局 0 0 220px; 默认宽度220px 不增长 不缩小
  private isCollapsed: boolean = false;   // 控制菜单缩进,
  private isFullscreen: boolean = false;  // 是否全屏
  private isFlexd: boolean = true;
  private bodyW: number = 0;
  private contentVisible: boolean = false;

  private lock: any = {
    isLock: false,           // 是否锁定
    passwordVisible: false,  // 控制Lock状态下的输入框图标
    password: '',            // Lock状态下的输入框值
    tooltipTitle: '',
    isClose: false,
    lockScale_TIO: null
  }


  constructor(
    private modalService: NzModalService,
    private router: Router,
    private utils: UtilsService,
    private quickTransfer: QuickTransferService,
    private eventManager: EventManager,
    private drawerService: NzDrawerService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.bodyW = event.target.innerWidth;
    this.contentVisible = this.bodyW  > 290 ? false : true;
  }


  async ngOnInit() {
    this.bodyW = document.body.clientWidth;
    this.drawInit();
    this.timeMsg = this.getTimeMsg();
  }

  /**
   * 数据初始化
   */
  drawInit() {
    const nowLink = this.router.url.slice(1, this.router.url.length);
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
        open: false,
        selected: false,
        disabled: false,
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
            routerLink: '',
            children: [
              {
                title: '清除-1',
                mid: 23,
                fid: 4,
                icon: {
                  type: '',
                  theme: ''
                },
                lev: 3,
                routerLink: '',
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
                    routerLink: 'learnadmin/user/none/cache/c',
                    children: [],
                    open: false,
                    selected: false,
                    disabled: false,
                  }
                ],
                open: false,
                selected: false,
                disabled: false,
              }
            ],
            open: false,
            selected: false,
            disabled: false,
          }
        ],
        open: false,
        selected: false,
        disabled: false,
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
            children: [

            ],
            open: false,
            selected: false,
            disabled: false,
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
            open: false,
            selected: false,
            disabled: false,
          }
        ],
        open: false,
        selected: false,
        disabled: false,
      }
    ];
    this.menuData = menus;
    // 通过fid 找到对应的父级菜单 初始化时对应菜单选中
    this.findByFidRS(menus, this.findByLink(this.findAllLinksRS(menus), nowLink).fid);
  }

  /**
   * 菜单左侧时间提示信息
   */
  getTimeMsg(): string {
    const hours = this.utils.getSysDate().getHours();
    if (hours >= 0 && hours < 6) {
      return '熬夜冠军';
    }
    if (hours >= 6 && hours < 9) {
      return '早上好';
    }

    if (hours >= 9 && hours < 12) {
      return '上午好';
    }

    if (hours >= 12 && hours < 14) {
      return '睡个午觉吧';
    }

    if (hours >= 14 && hours < 18) {
      return '下午好';
    }
    if (hours >= 18 && hours < 24) {
      return '晚上好';
    }
  }

  /**
   * 子菜单按钮点击
   * @param item item
   */
  itemMenuClick(item: any) {
    this.nodeManage(item.fid);
  }

  /**
   * 节点处理
   * @param menus 
   */
  nodeManage(fid: number) {
    fid == 0 ? this.zeroManage(this.menuData, fid) : this.menuData = this.fidManage(this.menuData, fid);
  }

  /**
   * fid 处理
   * @param menus 
   * @param fid 
   */
  fidManage(menus: any[], fid: number) {
    let tempMenus: any[] = [];
    const menuFun = (menus: any[], fid: number) => {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].mid == fid) {
          tempMenus.push(menus[i].mid)
          menuFun(this.menuData, menus[i].fid);
          break;
        } else {
          if (menus[i].children.length > 0) {
            menuFun(menus[i].children, fid)
          }
        }
      }
    }
    menuFun(menus, fid);
    const setMenuColor = (menus: any[]) => {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].children.length > 0) {
          this.utils.isInStrItem(menus[i].mid, ...tempMenus) ? menus[i].color = this.themeColor : menus[i].color = '';
          setMenuColor(menus[i].children)
        }
      }
    }
    setMenuColor(menus)
    return menus;
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
        this.zeroManage(item.children, fid);
      }
    });
  }


  /**
   * 根据菜单id查找
   * @param menus 菜单数据
   * @param fid 菜单id
   */
  findByFidRS(menus: any[], fid: number) {
    const menuFun = (menus: any[], fid: number) => {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].mid == fid) {
          menus[i].open = true;
          menus[i].color = this.themeColor;
          menuFun(this.menuData, menus[i].fid);
          break;
        } else {
          if (menus[i].children.length > 0) {
            menuFun(menus[i].children, fid);
          }
        }
      }
    }
    menuFun(menus, fid);
    return menus;
  }

  /**
   * 获取菜单所以菜单链接
   * @param menus 菜单数据
   */
  findAllLinksRS(menus: any[]) {
    const links: any[] = [];
    const linkFun = (data: any[]) => {
      data.forEach(item => {
        item.children.length > 0 ? linkFun(item.children) : links.push({ mid: item.mid, fid: item.fid, link: item.routerLink });
      });
    }
    linkFun(menus);
    return links;
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
    this.style = this.isCollapsed ? '0 0 80px' : '0 0 200px'
  }

  /**
  * 监听浏览器大小改变
  * 页面锁定
  */
  windowFun = window.addEventListener("resize", () => {
    let full_status = document['fullscreen'] || document['webkitIsFullScreen'] || document['mozFullScreen'] || false;
    !full_status ? this.isFullscreen = false : this.isFullscreen = true;
  })

  /**
   * 全屏事件
   */
  doFullscreen() {
    if (!this.isFullscreen) {
      const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
      if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
        docElmWithBrowsersFullScreenFunctions.requestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { // Firefox 
        docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
      } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { // Chrome, Safari and Opera 
        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { // IE/Edge 
        docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
      }
      this.isFullscreen = true;
    } else {
      const docWithBrowsersExitFunctions = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { // Firefox 
        docWithBrowsersExitFunctions.mozCancelFullScreen();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { // Chrome, Safari and Opera 
        docWithBrowsersExitFunctions.webkitExitFullscreen();
      } else if (docWithBrowsersExitFunctions.msExitFullscreen) { // IE/Edge 
        docWithBrowsersExitFunctions.msExitFullscreen();
      }
      this.isFullscreen = false;
    }
  }

  /**
   * 页面锁定
   */
  doLock() {
    if (this.lock.isLock) {
      this.lock.isLock = false
    } else {
      clearTimeout(this.lock.lockScale_TIO);
      this.lock.isLock = true;
      this.lock.isClose = false;
      this.lock.tooltipTitle = '兄die，体验过回车的力量吗！';
    }
  }

  /**
   * 头部导航解锁
   */
  unLock() {
    if (this.lock.password == "123456") {
      this.lock.isClose = true;
      clearTimeout(this.lock.lockScale_TIO);
      this.lock.lockScale_TIO = setTimeout(() => {
        this.lock.isLock = false;
        this.lock.passwordVisible = false;
        this.lock.password = '';
      }, 200);
    }
  }






  /**
   * 弹出个人信息框
   */
  openDrawer(type: string) {
    // TODO: 头部导航栏的信息实现(待处理)...
    console.log(type)

    let drawerRef = null;

    if (type == 'my-center') {
      drawerRef = this.drawerService.create<UserInfoComponent, { val: any }, any>({
        nzTitle: '个人中心',
        nzWidth: '640px',
        nzMaskClosable: false, // 点击蒙层是否允许关闭
        nzContent: UserInfoComponent,
        nzPlacement: 'right',
        nzContentParams: {
          val: ''
        }
      });
    } else {
      // drawerRef = this.drawerService.create<UserInfoComponent, { val: any }, any>({
      //   nzTitle: '个人设置',
      //   nzWidth: '640px',
      //   nzMaskClosable: false, // 点击蒙层是否允许关闭
      //   nzContent: UserInfoComponent,
      //   nzContentParams: {
      //     val: ''
      //   }
      // });
    }

    // // 关闭回调
    // drawerRef.afterClose.subscribe(data => {
    //   console.log(data)
    // });
  }
}
