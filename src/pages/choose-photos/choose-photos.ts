import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { PhotoLibrary } from '@ionic-native/photo-library';

/**
 * Generated class for the ChoosePhotosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-choose-photos',
  templateUrl: 'choose-photos.html',
})
export class ChoosePhotosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private photoLibrary: PhotoLibrary, private imagePicker: ImagePicker) {

    //To research:
    //  http://ionicframework.com/docs/native/image-picker/
    //  http://blog.ionic.io/layout-the-cool-way-using-the-ionic-2-grid-component/


      this.photoLibrary.getLibrary().subscribe({
    next: library => {
      library.forEach(function(libraryItem) {
        console.log(libraryItem.id);          // ID of the photo
        console.log(libraryItem.photoURL);    // Cross-platform access to photo
        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
        console.log(libraryItem.fileName);
        console.log(libraryItem.width);
        console.log(libraryItem.height);
        console.log(libraryItem.creationDate);
        console.log(libraryItem.latitude);
        console.log(libraryItem.longitude);
        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
      });
    },
    error: err => { console.log('could not get photos'); },
    complete: () => { console.log('done getting photos'); }
  });

 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePhotosPage');
  }





  add() {
    console.log('add()');
    this.navCtrl.pop();
  }

}
