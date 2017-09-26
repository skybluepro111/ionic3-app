import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsHistoryPage } from './notifications-history';

@NgModule({
  declarations: [
    NotificationsHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsHistoryPage),
  ],
  exports: [
    NotificationsHistoryPage
  ]
})
export class NotificationsHistoryPageModule {}
