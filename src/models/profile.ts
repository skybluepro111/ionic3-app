import * as firebase from 'firebase/app';
import * as moment from 'moment';

import {ITag} from "./tag";
import {IBook} from "./book";
import {IChild} from "./child";

export interface IProfile {
  $key?: string;
  createdAt: Object;
  username: string;
  subscriptionStatus: string;
  tags: ITag[];
  books: IBook[];
  children: IChild[];
  deliverAgeRelatedMilestones: boolean;
  deliverMindfulInspirations: boolean;
  mindfulInspirationsDays: string[];
  notifications: INotification[];
  notificationTime: string;
  //TODO: Get this iFunction working to provide this service to profile.html
  //REF: https://www.bricewilson.net/2015/09/27/typescript-interfaces/
  getSubscriptionStatusLabel(): string;
}

export interface INotification {
  $key?: string;
  createdAt: Object;
  type: string;
  text: string;
  viewed: boolean;
  //TODO: Get this iFunction working to provide this service to profile.html
  getUnreadNotificationCount(): number;
}

export class Profile implements IProfile {
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  date = moment(Date.now()).format('YYYY-MM-DD');
  username = '';
  subscriptionStatus: 'noSubscription'; //vs. subscribed
  tags: ITag[];
  books: IBook[];
  children: IChild[];
  deliverAgeRelatedMilestones = true;
  deliverMindfulInspirations = true;
  mindfulInspirationsDays: ['1','2','3','4','5','6','7'];
  notifications: INotification[];
  notificationTime: '12:00';

  constructor() {
    //TODO: Initialize with default tags.
  }

  getSubscriptionStatusLabel(): string {
    let returnStr = "Why Upgrade?";
    if (this.subscriptionStatus !== 'noSubscription') {
      returnStr = "Subscribed";
    }

    console.log('returnStr:', returnStr);
    return returnStr;
  }
}
