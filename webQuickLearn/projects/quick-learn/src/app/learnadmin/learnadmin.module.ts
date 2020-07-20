import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnadminRoutingModule } from './learnadmin-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LearnadminRoutingModule,
    NgZorroAntdModule
  ],
  exports: []
})
export class LearnadminModule { }
