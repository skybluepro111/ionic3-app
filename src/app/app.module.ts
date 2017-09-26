import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { MindfulCornerPage } from '../pages/mindful-corner/mindful-corner';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListMasterPage } from '../pages/list-master/list-master';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { AmChoosePage } from '../pages/am-choose/am-choose';
import { ChoosePhotosPage } from '../pages/choose-photos/choose-photos';

import { ProfilePage } from '../pages/profile/profile';
import { OrderBookPage } from '../pages/order-book/order-book';
import { WhyUpgradePage } from '../pages/why-upgrade/why-upgrade';
import { TagsListPage } from '../pages/tags-list/tags-list';
import { TagEditPage } from '../pages/tag-edit/tag-edit';
import { BooksListPage } from '../pages/books-list/books-list';
import { BookEditPage } from '../pages/book-edit/book-edit';
import { ChildEditPage } from '../pages/child-edit/child-edit';
import { NotificationsSettingsPage } from '../pages/notifications-settings/notifications-settings';
import { NotificationsHistoryPage } from '../pages/notifications-history/notifications-history';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { Camera } from '@ionic-native/camera';

// import { Api } from '../providers/api';
// import { Items } from '../mocks/providers/items';
// import { Settings } from '../providers/settings';
// import { User } from '../providers/user';
import { Soulments } from '../providers/soulments';
import { Books } from '../providers/books';
import { Tags } from '../providers/tags';
import { Children } from '../providers/children';
import { RateService } from '../providers/rate-service/rate-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import {AppRate} from '@ionic-native/app-rate';

import { AuthService } from '../auth';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; //TODO: ??
    // https://www.joshmorony.com/how-to-use-pipes-to-manipulate-data-in-ionic-2/
import { MindfulsProvider } from '../providers/mindfuls';
import { ProfileProvider } from '../providers/profile';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const firebaseConfig = {
  apiKey: "AIzaSyAdYytYL3h9V5qDcJEq4gnlleyRrEcEJxo",
  authDomain: "sm-dev-53b84.firebaseapp.com",
  databaseURL: "https://sm-dev-53b84.firebaseio.com",
  projectId: "sm-dev-53b84",
  storageBucket: "sm-dev-53b84.appspot.com",
  messagingSenderId: "815403528169"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    MindfulCornerPage,
    HomePage,
    TabsPage,
    ListMasterPage,
    ItemDetailPage,
    ProfilePage,
    OrderBookPage,
    WhyUpgradePage,
    TagsListPage,
    TagEditPage,
    BooksListPage,
    BookEditPage,
    ChildEditPage,
    NotificationsSettingsPage,
    NotificationsHistoryPage,
    AmChoosePage,
    ChoosePhotosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // AuthService,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    MindfulCornerPage,
    HomePage,
    TabsPage,
    ListMasterPage,
    ItemDetailPage,
    ProfilePage,
    OrderBookPage,
    WhyUpgradePage,
    TagsListPage,
    TagEditPage,
    BooksListPage,
    BookEditPage,
    ChildEditPage,
    NotificationsSettingsPage,
    NotificationsHistoryPage,
    AmChoosePage,
    ChoosePhotosPage
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Soulments,
    Books,
    Children,
    Tags,
    MindfulsProvider,
    ProfileProvider,
    AppRate,
    RateService,
    Camera,
    PhotoLibrary
  ]
})
export class AppModule {}
