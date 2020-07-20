import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { NzIconModule, NgZorroAntdModule, NzLayoutModule, NzAvatarModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzIconModule,
    NgZorroAntdModule,
    NzLayoutModule,
    FormsModule,
    NzAvatarModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
