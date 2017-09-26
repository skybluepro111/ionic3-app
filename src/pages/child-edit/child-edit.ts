import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase/app';

import {Child, IChild} from "../../models/child";
import {Children} from "../../providers/children";

@IonicPage()
@Component({
  selector: 'page-child-edit',
  templateUrl: 'child-edit.html',
})
export class ChildEditPage {
  item: any;
  itemOrig: any;
  mode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private items: Children) {
    if (navParams.get('item')) {
      this.item = navParams.get('item');
      this.itemOrig = Object.assign({}, this.item);
      this.mode = 'view';
    } else {
      this.item = new Child();
      this.mode = 'add';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildEditPage');
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
