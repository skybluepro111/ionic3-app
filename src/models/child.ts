import * as firebase from 'firebase/app';
import * as moment from 'moment';

export interface IChild {
  $key?: string;
  createdAt: Object;
  name: string;
  gender: string;
  birthdate: string;
}

export class Child implements IChild {
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  name = '';
  gender = '';
  birthdate = '';

  constructor() {
  }
}
