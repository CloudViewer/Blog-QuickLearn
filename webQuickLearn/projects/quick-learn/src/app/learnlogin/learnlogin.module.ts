import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LearnloginRoutingModule } from './learnlogin-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    LearnloginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class LearnloginModule { }
