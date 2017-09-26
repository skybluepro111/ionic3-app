import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {AppRate} from '@ionic-native/app-rate';

@Injectable()
export class RateService {

  constructor(public platform: Platform, private appRate: AppRate) {
    this.platform.ready().then(() => {
      if (platform.is('cordova')) {
        // this.appRate.preferences = {};
        this.appRate.preferences.storeAppURL = {
          ios: '1250188314',
          android: 'market://details?id=com.soulments.soulments'
        };
        this.appRate.preferences.usesUntilPrompt = 10;
        this.appRate.preferences.customLocale = {
          title: 'Please Rate Us!',
          message: "Positive ratings help other's learn of the Soulments app.",
          cancelButtonLabel: 'No thanks',
          rateButtonLabel: 'Rate it!',
          laterButtonLabel: 'Ask Later'
        };
      }
    });
  }

  rateNow() {
    // this.appRate.promptForRating(true);
    this.appRate.navigateToAppStore();
  }

}
