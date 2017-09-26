import * as firebase from 'firebase/app';
import * as moment from 'moment';

export interface ITag {
  $key?: string;
  createdAt: Object;
  name: string;
}

export class Tag implements ITag {
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  name = '';

  constructor() {
  }
}
