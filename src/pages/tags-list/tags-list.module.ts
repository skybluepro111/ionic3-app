import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagsListPage } from './tags-list';

@NgModule({
  declarations: [
    TagsListPage,
  ],
  imports: [
    IonicPageModule.forChild(TagsListPage),
  ],
  exports: [
    TagsListPage
  ]
})
export class TagsListPageModule {}
