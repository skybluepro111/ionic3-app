import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MindfulCornerPage } from '../mindful-corner/mindful-corner';
// import { HomePage } from '../home/home';
import { ListMasterPage } from '../list-master/list-master';
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListMasterPage;
  tab2Root = ItemDetailPage
  //AboutPage;
  tab3Root = MindfulCornerPage;

  constructor() {

  }
}
