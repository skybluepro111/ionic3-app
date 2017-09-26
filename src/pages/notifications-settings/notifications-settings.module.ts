import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsSettingsPage } from './notifications-settings';

@NgModule({
  declarations: [
    NotificationsSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsSettingsPage),
  ],
  exports: [
    NotificationsSettingsPage
  ]
})
export class NotificationsSettingsPageModule {}
