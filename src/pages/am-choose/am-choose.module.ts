import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmChoosePage } from './am-choose';

@NgModule({
  declarations: [
    AmChoosePage,
  ],
  imports: [
    IonicPageModule.forChild(AmChoosePage),
  ],
  exports: [
    AmChoosePage
  ]
})
export class AmChoosePageModule {}
