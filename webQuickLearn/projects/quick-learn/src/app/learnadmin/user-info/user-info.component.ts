import { Component, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {

  constructor(private drawer: NzDrawerRef) { }

  ngOnInit() {
  }

}
