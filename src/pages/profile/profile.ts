import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {SocialSharing} from "@ionic-native/social-sharing";

import { OrderBookPage } from '../order-book/order-book';
import { WhyUpgradePage } from '../why-upgrade/why-upgrade';
import { TagsListPage } from '../tags-list/tags-list';
import { BooksListPage } from '../books-list/books-list';
import { ChildEditPage } from '../child-edit/child-edit';
import { NotificationsSettingsPage } from '../notifications-settings/notifications-settings';
import { NotificationsHistoryPage } from '../notifications-history/notifications-history';

import { RateService } from '../../providers/rate-service/rate-service';
import {Observable} from "rxjs/Observable";

import { ProfileProvider } from '../../providers/profile';
import { IProfile, Profile } from '../../models/profile';

import {Books} from "../../providers/books";
import {IBook} from "../../models/book";

import {Tags} from "../../providers/tags";
import {ITag} from "../../models/tag";

import {Children} from "../../providers/children";
import {IChild} from "../../models/child";

import {Soulments} from '../../providers/soulments';
import {ISoulment} from '../../models/soulment';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  orderBookPage = OrderBookPage;
  whyUpgradePage = WhyUpgradePage;
  tagsListPage = TagsListPage;
  booksListPage = BooksListPage;
  notificationsSettingsPage = NotificationsSettingsPage;
  childEditPage = ChildEditPage;
  notificationsHistoryPage = NotificationsHistoryPage;

  profile$: Observable<IProfile>;
  books: Observable<IBook[]>;
  tags: Observable<ITag[]>;
  children: Observable<IChild[]>;

  currentItems: Observable<ISoulment[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public profileProvider: ProfileProvider, public items: Soulments,
              public booksProvider: Books, public tagsProvider: Tags, public childrenProvider: Children,
              private socialSharing: SocialSharing, private rateService: RateService) {
    this.currentItems = items.visibleSoulments$;

    this.profile$ = profileProvider.visibleProfile;
    this.books = booksProvider.visibleBooks$;
    this.tags = tagsProvider.visibleTags$;
    this.children = childrenProvider.visibleChildren$;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openLink(url: string) {
    //TODO: Test on mobile; use InAppBrowser?: https://forum.ionicframework.com/t/open-all-links-in-app-browser/66442/4?u=gaharrington
    window.open(url);
  }

  shareApp() {
    this.socialSharing.shareViaSMS("Test share message! http://www.soulments.com/", null);
  }

  rateApp() {
    this.rateService.rateNow();
  }
}
