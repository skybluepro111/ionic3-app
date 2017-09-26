import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase/app';

import {Tag, ITag} from "../../models/tag";
import {Tags} from "../../providers/tags";

@IonicPage()
@Component({
  selector: 'page-tag-edit',
  templateUrl: 'tag-edit.html',
})
export class TagEditPage {
  item: any;
  itemOrig: any;
  mode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private items: Tags) {
    if (navParams.get('item')) {
      this.item = navParams.get('item');
      this.itemOrig = Object.assign({}, this.item);
      this.mode = 'view';
    } else {
      var newTag: ITag = {
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        name: ''
      };
      this.item = new Tag();
      this.mode = 'add';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagEditPage');
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
