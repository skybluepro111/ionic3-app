import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';

  import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  // items: Item[] = [];
  items: FirebaseListObservable<any[]>;


  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(db: AngularFireDatabase) {
    this.items = db.list('/soulments'+'/abc');

  }

  query(params?: any) {
    // if (!params) {
      return this.items;
    // }
  //
  //   return this.items.filter((item) => {
  //     for (let key in params) {
  //       let field = item[key];
  //       if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
  //         return item;
  //       } else if (field == params[key]) {
  //         return item;
  //       }
  //     }
  //     return null;
  //   });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    // this.items.splice(this.items.indexOf(item), 1);
  }
}
