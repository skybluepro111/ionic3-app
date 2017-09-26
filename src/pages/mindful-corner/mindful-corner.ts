import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Observable} from 'rxjs/Observable';
import { MindfulsProvider} from '../../providers/mindfuls';
import { Mindful } from '../../models/mindful';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-mindful-corner',
  templateUrl: 'mindful-corner.html',
})
export class MindfulCornerPage {
  isNotification: boolean = false;
  currentItems: Observable<Mindful[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: MindfulsProvider) {
    this.currentItems = items.visibleMindfuls$;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MindfulCornerPage');
  }

  profile() {
    console.log('profile()');

    //TODO: Manage isNotification state based on Profile stae.
    this.isNotification = !this.isNotification;

    //TODO: ADD: Navigate to Profile page.
    this.navCtrl.push(ProfilePage);
  }

  openLink(url: string) {
    //TODO: Test on mobile; use InAppBrowser?: https://forum.ionicframework.com/t/open-all-links-in-app-browser/66442/4?u=gaharrington
    window.open(url);
  }
}
