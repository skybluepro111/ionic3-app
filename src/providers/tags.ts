import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ProfileProvider } from '../providers/profile';

import * as firebase from 'firebase/app';
import {Tag, ITag} from "../models/tag";

@Injectable()
export class Tags {
  visibleTags$: Observable<ITag[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  tags$: FirebaseListObservable<ITag[]>;

  constructor(afDb: AngularFireDatabase, profileProvider: ProfileProvider) {

        const path = `/profiles/${profileProvider.getUid()}/tags`;
        console.log('path:',path);

        this.tags$ = afDb.list(path, {query: {
          orderByChild: 'name'
        }});

        this.tags$.subscribe( items => {
          console.log('items',items);
        });

        this.visibleTags$ = this.tags$;
  }

  create(item: Tag): firebase.Promise<any> {
    return this.tags$.push(item);
  }

  remove(item: ITag): firebase.Promise<any> {
    return this.tags$.remove(item.$key);
  }

  update(item: ITag, changes: any): firebase.Promise<any> {
    return this.tags$.update(item.$key, changes);
  }
}
