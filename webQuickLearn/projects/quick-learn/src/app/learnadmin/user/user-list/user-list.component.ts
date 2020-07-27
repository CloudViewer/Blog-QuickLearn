import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
   /**
   * 为当前组件绑定Class
   */
  @HostBinding('class.flex-quick') get quickClass(){
    return 'flex-quick';
  }

  constructor() { }

  ngOnInit() {
  }

}
