import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NzIconModule, NgZorroAntdModule, NzLayoutModule, NzAvatarModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { LearncommModule } from '../../learncomm/learncomm.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzIconModule,
    NgZorroAntdModule,
    NzLayoutModule,
    FormsModule,
    NzAvatarModule,
    LearncommModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
