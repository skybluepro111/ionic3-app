import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase/app';

import {Book, IBook} from "../../models/book";
import {Books} from "../../providers/books";

@IonicPage()
@Component({
  selector: 'page-book-edit',
  templateUrl: 'book-edit.html',
})
export class BookEditPage {
  item: any;
  itemOrig: any;
  mode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private items: Books) {
    if (navParams.get('item')) {
      this.item = navParams.get('item');
      this.itemOrig = Object.assign({}, this.item);
      this.mode = 'view';
    } else {
      var newBook: IBook = {
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        name: ''
      };
      this.item = new Book();
      this.mode = 'add';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookEditPage');
  }

  done() {
    console.log('done()');

    if (!this.itemOrig) {
      this.items.create(this.item);
    } else {
      this.items.update(this.item, this.item);
    }

    this.navCtrl.pop();
  }
}
