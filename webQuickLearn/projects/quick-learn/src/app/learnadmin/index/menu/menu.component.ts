import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-tree',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  isCollapsed: boolean = false;  // 控制菜单的变化
  isHomeSelected: boolean = false;

  constructor(private router: Router) { }

  @Input() treeData = [];

  ngOnInit() {
    const nowUrl = this.router.url;
    const lastIndex = nowUrl.lastIndexOf('/');
    const urlCode = nowUrl.substring(lastIndex + 1, nowUrl.length);
    console.log(urlCode)
    urlCode == 'home' ? this.isHomeSelected = true : this.isHomeSelected = false;
  }


  public doMenuSetting() {
    this.isCollapsed = this.isCollapsed ? false : true;
  }

}
