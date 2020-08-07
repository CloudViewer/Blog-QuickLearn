import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnadminRoutingModule } from './learnadmin-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IndexComponent } from './index/index.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzToolTipModule} from 'ng-zorro-antd/tooltip';
import { UserInfoComponent } from './index/user-info/user-info.component';

@NgModule({
  declarations: [IndexComponent,UserInfoComponent],
  imports: [
    CommonModule,
    LearnadminRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    NzInputModule,
    NzToolTipModule
  ],
  exports: [],
  entryComponents:[
    UserInfoComponent
  ],
})
export class LearnadminModule { }
