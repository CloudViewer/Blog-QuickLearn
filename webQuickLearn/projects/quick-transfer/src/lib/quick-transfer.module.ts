import { NgModule } from '@angular/core';
import { QuickTransferComponent } from './quick-transfer.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [QuickTransferComponent],
  imports: [
    HttpClientModule
  ],
  exports: [QuickTransferComponent]
})
export class QuickTransferModule { }
