import * as firebase from 'firebase/app';
import * as moment from 'moment';

export interface IBook {
  $key?: string;
  createdAt: Object;
  name: string;
}

export class Book implements IBook {
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  name = '';

  constructor() {
  }
}
