import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosePhotosPage } from './choose-photos';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    ChoosePhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosePhotosPage),
  ],
  exports: [
    ChoosePhotosPage
  ]
})
export class ChoosePhotosPageModule {}
