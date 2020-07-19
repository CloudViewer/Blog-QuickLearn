import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

// import { NgxEchartsModule } from 'ngx-echarts';
// NgxEchartsModule



import { LearnadminRoutingModule } from './learnadmin-routing.module';
import { IndexComponent } from './index/index.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [IndexComponent, UserInfoComponent, HomeComponent],
  imports: [
    CommonModule,
    LearnadminRoutingModule,
    NzIconModule,
    NgZorroAntdModule,
    NzLayoutModule,
    FormsModule,
    NzAvatarModule,
    ReactiveFormsModule,
  ],
  entryComponents:[
   UserInfoComponent
  ],
  exports: []
})
export class LearnadminModule { }
