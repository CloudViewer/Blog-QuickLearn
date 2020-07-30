import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  /**
   * 为当前组件绑定Class
   */
  @HostBinding('class.flex-quick') get quickClass(){
    return 'flex-quick';
  }

  constructor() { }

  ngOnInit() {
    // 初始化加载
  }

}
