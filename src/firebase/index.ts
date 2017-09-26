import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// const firebaseConfig = {
//   apiKey: 'AIzaSyDaEW83qAOozjJbbJP1YYbEHxxfFksdSHQ',
//   authDomain: 'ng2-todo-app.firebaseapp.com',
//   databaseURL: 'https://ng2-todo-app.firebaseio.com',
//   storageBucket: 'ng2-todo-app.appspot.com'
// };
const firebaseConfig = {
  apiKey: "AIzaSyAdYytYL3h9V5qDcJEq4gnlleyRrEcEJxo",
  authDomain: "sm-dev-53b84.firebaseapp.com",
  databaseURL: "https://sm-dev-53b84.firebaseio.com",
  projectId: "sm-dev-53b84",
  storageBucket: "sm-dev-53b84.appspot.com",
  messagingSenderId: "815403528169"
};


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig, 'ng2-todo-app')
  ]
})
export class FirebaseModule {}
