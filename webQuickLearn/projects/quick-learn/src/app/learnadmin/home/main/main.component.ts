import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  /**
   * 为当前组件绑定Class
   */
  @HostBinding('class.flex-quick') get quickClass() {
    return 'flex-quick';
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // 初始化加载
  }

  doRequest() {
    this.http.get("http://127.0.0.1:8080/demo/getCode").subscribe(res => {
      console.log(res)
    });

    this.http.post("",{})
  }

}
