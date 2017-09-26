import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagEditPage } from './tag-edit';

@NgModule({
  declarations: [
    TagEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TagEditPage),
  ],
  exports: [
    TagEditPage
  ]
})
export class TagEditPageModule {}
