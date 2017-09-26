import * as firebase from 'firebase/app';
// import 'moment/moment.d.ts';
import * as moment from 'moment';

export interface ISoulment {
  $key?: string;
  createdAt: Object;
  referrerId: string;
  date: string;
  title: string;
  text: string;
  keyFrameUrl: string;
  tags: string[];
  books: string[];
}

export class Soulment implements ISoulment {
  completed = false;
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  referrerId;
  date = moment(Date.now()).format('YYYY-MM-DD');
  title = ''; //TODO: Move to FB-Fx
  text = '';
  keyFrameUrl = ''; //TODO: Move to FB-Fx
  tags = [];
  books = [];

  constructor(title: string) {
    this.title = title;
  }
}
