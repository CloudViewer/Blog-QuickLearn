import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnadminRoutingModule } from './learnadmin-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './index/menu/menu.component';

@NgModule({
  declarations: [IndexComponent, MenuComponent],
  imports: [
    CommonModule,
    LearnadminRoutingModule,
    NgZorroAntdModule
  ],
  exports: []
})
export class LearnadminModule { }
