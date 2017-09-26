import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';

import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {ProfileProvider} from '../providers/profile';

import * as firebase from 'firebase/app';
import {Book, IBook} from "../models/book";

@Injectable()
export class Books {
  visibleBooks$: Observable<IBook[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private books$: FirebaseListObservable<IBook[]>;

  constructor(afDb: AngularFireDatabase, profileProvider: ProfileProvider) {

    const path = `/profiles/${profileProvider.getUid()}/books`;
    console.log('path:', path);

    this.books$ = afDb.list(path, {
      query: {
        orderByChild: 'name'
      }
    });

    this.books$.subscribe(items => {
      console.log('items', items);
    });

    this.visibleBooks$ = this.books$;
  }

  create(item: Book): firebase.Promise<any> {
    return this.books$.push(item);
  }

  remove(item: IBook): firebase.Promise<any> {
    return this.books$.remove(item.$key);
  }

  update(item: IBook, changes: any): firebase.Promise<any> {
    return this.books$.update(item.$key, changes);
  }
}
