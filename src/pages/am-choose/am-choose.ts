import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-am-choose',
  templateUrl: 'am-choose.html',
})
export class AmChoosePage {
  title: string = '';
  isMultiSelect: boolean;
  items: Observable<any>; //TODO: Create @interface?
  selecteds: string[]; //TODO: Create @interface?

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // EXAMPLE:
    // var params = {
    //   isMultiSelect: true,
    //   title: "Choose Tags",
    //   items: this.tagsProvider.tags$, // [ {id: x, name: y}, ... ]
    //   selecteds: profile.tags
    // };
    this.isMultiSelect = navParams.get('isMultiSelect') || false;
    this.title = navParams.get('title');
    this.items = navParams.get('items');
    this.selecteds = navParams.get('selecteds');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmChoosePage');
  }

  isSelected(id: string) {
    return this.selecteds.indexOf(id) > -1;
  }

  toggleItem(id: string) {
    if (!this.isMultiSelect) {
      this.selecteds.splice(0, this.selecteds.length);
      this.selecteds.push(id);
      this.navCtrl.pop();

    } else if (this.isSelected(id)) {
      this.selecteds.splice(this.selecteds.indexOf(id), 1);
    } else {
      this.selecteds.push(id);
    }
  }

}
