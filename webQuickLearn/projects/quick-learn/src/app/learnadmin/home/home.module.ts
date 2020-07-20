import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NzIconModule, NgZorroAntdModule, NzLayoutModule, NzAvatarModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';


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
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
