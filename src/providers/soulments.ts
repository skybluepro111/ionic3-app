import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';

import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {AuthService} from '../auth';
import {ISoulment, Soulment} from '../models/soulment';
import {ProfileProvider} from "./profile";

@Injectable()
export class Soulments {
  visibleSoulments$: Observable<ISoulment[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredSoulments$: FirebaseListObservable<ISoulment[]>;
  private soulments$: FirebaseListObservable<ISoulment[]>;

  constructor(afDb: AngularFireDatabase, auth: AuthService, profileProvider: ProfileProvider) {
    const path = `/soulments/${profileProvider.getUid()}`;

    this.soulments$ = afDb.list(path);

    this.filteredSoulments$ = afDb.list(path, {
      query: {
        orderByChild: 'date',
        // equalTo: this.filter$
        // equalTo: true
      }
    }).map((arr) => {
      return arr.reverse();
    }) as FirebaseListObservable<any[]>;

    // this.visibleSoulments$ = this.soulments$;
    this.visibleSoulments$ = this.filteredSoulments$;
  }


  // filterItems(filter: string): Observable<ISoulment[]> {
  //   this.visibleSoulments$ = this.filter$
  //     .filter(item => (item.text.indexOf(filter) > -1));
  //
  //   return this.visibleSoulments$;
  //
  // }

  create(item: Soulment): firebase.Promise<any> {
    item.title = item.text.substr(0, item.text.indexOf('\n'));
    return this.soulments$.push(item);
  }

  remove(item: ISoulment): firebase.Promise<any> {
    return this.soulments$.remove(item.$key);
  }

  update(item: ISoulment, changes: any): firebase.Promise<any> {
    return this.soulments$.update(item.$key, changes);
  }
}
