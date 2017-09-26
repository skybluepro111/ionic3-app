import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhyUpgradePage } from './why-upgrade';

@NgModule({
  declarations: [
    WhyUpgradePage,
  ],
  imports: [
    IonicPageModule.forChild(WhyUpgradePage),
  ],
  exports: [
    WhyUpgradePage
  ]
})
export class WhyUpgradePageModule {}
