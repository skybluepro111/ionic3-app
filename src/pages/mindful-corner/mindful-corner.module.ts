import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MindfulCornerPage } from './mindful-corner';

@NgModule({
  declarations: [
    MindfulCornerPage,
  ],
  imports: [
    IonicPageModule.forChild(MindfulCornerPage),
  ],
  exports: [
    MindfulCornerPage
  ]
})
export class MindfulCornerPageModule {}
