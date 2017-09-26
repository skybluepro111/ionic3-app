import {Component, Input, ViewChild} from '@angular/core';
import {NavController, ModalController, Content} from 'ionic-angular';

import {ItemCreatePage} from '../item-create/item-create';
import {ItemDetailPage} from '../item-detail/item-detail';
import { ProfilePage } from '../profile/profile';

// import { Items } from '../../providers/providers';
// import { Item } from '../../models/item';

import {FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import {Soulments} from '../../providers/soulments';
import {ISoulment} from '../../models/soulment';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  @ViewChild(Content) content: Content;

  itemDetailPage = ItemDetailPage;

  currentItems: Observable<ISoulment[]>;
  searchTerm: string = '';

  defaultPic: string = 'assets/img/default-pic.png';
  isNotification: boolean = false;
  isSearch: boolean = false;
  soulmentsType: string = 'days';

  // public content: Content,
  constructor(public navCtrl: NavController, public items: Soulments, public modalCtrl: ModalController) {
    this.currentItems = items.visibleSoulments$;
    console.log('ListMasterPage.constructor() items.len', this.currentItems);
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    // let addModal = this.modalCtrl.create(ItemCreatePage);
    // addModal.onDidDismiss(item => {
    //   if (item) {
    //     this.items.add(item);
    //   }
    // })
    // addModal.present();
    console.log('addItem()');
  }

  search() {
    console.log('search()');

    this.isSearch = !this.isSearch;

    this.content.resize();
  }

  profile() {
    console.log('profile()');

    //TODO: Manage isNotification state based on Profile stae.
    this.isNotification = !this.isNotification;

    //TODO: ADD: Navigate to Profile page.
    this.navCtrl.push(ProfilePage);
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.remove(item);
  }

  isItemVisible(item) {
    return (item.text.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
  }

}
