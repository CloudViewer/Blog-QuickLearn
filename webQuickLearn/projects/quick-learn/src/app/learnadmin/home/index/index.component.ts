import { Component, OnInit } from '@angular/core';
import { NzDrawerService, NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],

})
export class IndexComponent implements OnInit {

  public code?: string;
  isCollapsed: boolean = false;
  style: string = '0 0 200px';
  userImg: string = '../../../assets/imgs/users/user-h-img.jpg';
  visible = false;
  // openMap: { [name: string]: boolean } = {
  //   sub1: true,
  //   sub2: false,
  //   sub3: false
  // };

  constructor(private drawerService: NzDrawerService,private modalService: NzModalService,private router: Router) {
    
  }

  ngOnInit() {
    // this.code = '111';
    // console.log(this.code)
    // const ec = echarts as any;
    // const lineChart = ec.init(document.getElementById('lineChart'));
    // lineChart.setOption(this.hartOption);
    // fromEvent(window, "resize").subscribe((event: any) => {

    //   console.log("浏览器的宽：", event.target.innerWidth)
    //   console.log("浏览器的高：", event.target.innerHeight)

    // })
  }


  routerClick(type){
    console.log(type)
    // this.router.navigateByUrl('learnadmin/home');
  }





  /**
   * 左侧比例设置
   */
  doTypesetting() {
    this.isCollapsed = this.isCollapsed ? false : true;
    this.style = this.isCollapsed ? '0 0 90px' : '0 0 200px'
  }

  // /**
  //  * 菜单的开启与关闭
  //  * @param value 
  //  */
  // openHandler(value: string): void {
  //   for (const key in this.openMap) {
  //     if (key !== value) {
  //       this.openMap[key] = false;
  //     }
  //   }
  // }

  /**
   * 弹出个人信息框
   */
  openUserInfo() {
    
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
