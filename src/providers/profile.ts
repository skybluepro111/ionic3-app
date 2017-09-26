import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';

import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../auth';
import { IProfile, Profile } from '../models/profile';
import {Observable} from "rxjs/Observable";


@Injectable()
export class ProfileProvider {
  visibleProfile: Observable<IProfile>;
  firebaseProfile: FirebaseObjectObservable<any>;

  constructor(afDb: AngularFireDatabase, auth: AuthService) {
    //TODO: MAJOR: Implement Auth
    //TODO: Then integrate auto-account create so we always have a UID
    // let uid = '123';
    // auth.uid$
    //   .take(1)
    //   .subscribe(uid => {
        const path = `/profiles/${this.getUid()}`;
        this.firebaseProfile = afDb.object(path);
        this.visibleProfile = this.firebaseProfile;
    // });

    //MOCK
    // let mockData = new Profile();
    // mockData.username = 'gaharrington@gmail.com';
    // this.create(mockData);
    //END MOCK
  }

  getUid() {
    return '123';
  }
  create(item: Profile): firebase.Promise<any> {
    return this.firebaseProfile.update(item);
  }

  remove(item: Profile): firebase.Promise<any> {
    return this.firebaseProfile.remove();
  }

  update(item: Profile, changes: any): firebase.Promise<any> {
    return this.firebaseProfile.update(item);
  }
}
