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
import {Child, IChild} from "../models/child";

@Injectable()
export class Children {
  visibleChildren$: Observable<IChild[]>;

  private children$: FirebaseListObservable<IChild[]>;

  constructor(afDb: AngularFireDatabase, profileProvider: ProfileProvider) {
    const path = `/profiles/${profileProvider.getUid()}/children`;

    this.children$ = afDb.list(path, {
      query: {
        orderByChild: 'name'
      }
    });

    this.children$.subscribe(items => {
      console.log('Children: items', items);
    });

    this.visibleChildren$ = this.children$;
  }

  create(item: Child): firebase.Promise<any> {
    return this.children$.push(item);
  }

  remove(item: IChild): firebase.Promise<any> {
    return this.children$.remove(item.$key);
  }

  update(item: IChild, changes: any): firebase.Promise<any> {
    return this.children$.update(item.$key, changes);
  }
}
