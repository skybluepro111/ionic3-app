import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildEditPage } from './child-edit';

@NgModule({
  declarations: [
    ChildEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildEditPage),
  ],
  exports: [
    ChildEditPage
  ]
})
export class ChildEditPageModule {}
