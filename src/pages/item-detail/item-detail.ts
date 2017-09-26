import {Component} from '@angular/core';
import {NavController, NavParams,ActionSheetController,Platform} from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { ListMasterPage } from '../list-master/list-master';
import { AmChoosePage } from '../am-choose/am-choose';
import { ChoosePhotosPage } from '../choose-photos/choose-photos';

import {ProfileProvider} from '../../providers/profile';
import {Tags} from '../../providers/tags';
import {Books} from '../../providers/books';
import {Soulments} from '../../providers/soulments';
import {Soulment} from "../../models/soulment";

import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
base64Image:any;
  item: any;
  itemOrig: any;
  mode: string;

  quoteText: string;
  placeholder: string = 'Add your pictures, video and notes here to create a Soulment.';
  placeholderTags: string = 'Add tag';
  placeholderBooks: string = 'Add Soulments book';

  refTags: any = {};
  refBooks: any = {};

  // @ViewChild('myTabs') tabRef: Tabs;

  constructor(public navCtrl: NavController, navParams: NavParams,
              public items: Soulments, public profileProvider: ProfileProvider,
              public tagsProvider: Tags, public booksProvider: Books,  public platform: Platform,public camera:Camera,public actionSheetCtrl: ActionSheetController) {
    if (navParams.get('item')) {
      this.item = navParams.get('item');
      this.itemOrig = Object.assign({}, this.item);
      this.mode = 'view';
    } else {
      this.item = new Soulment("from-item-detail");
      this.mode = 'add';
      this.quoteText = 'Rethink "I\'ll be happy when..." to "I’m happy now because..."';
    }

    this.tagsProvider.visibleTags$.subscribe(result => {
      for (let item of result) {
        this.refTags[item.$key] = item.name;
      }
    });

    this.booksProvider.visibleBooks$.subscribe(result => {
      for (let item of result) {
        this.refBooks[item.$key] = item.name;
      }
    });
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            
            this.accessGallery()

          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
 
  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      // // this.filePath.resolveNativePath(imagePath)
      //   .then(filePath => {
      //     let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
      //     let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
      //     // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      //   });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {
    // this.presentToast('Error while selecting image.');
  });
}

accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }
  isAddMode() {
    return  (this.mode == 'add') ;
  }
  isViewMode() {
    return  (this.mode == 'view') ;
  }
  isEditMode() {
    return  (this.mode == 'edit') ;
  }

  booksInfo(){

  }

  quote() {
    console.log('quote()');
    this.item.text = this.quoteText + '\n' + this.item.text;
  }

  cameraOpen() {
    console.log('camera()');
    this.navCtrl.push(ChoosePhotosPage);
  }

  tags() {
    console.log('tags()');

    if (!this.item.tags) { this.item.tags = []; }

    var params = {
      isMultiSelect: true,
      title: "Choose Tags",
      items: this.tagsProvider.tags$, // [ {id: x, name: y}, ... ]
      selecteds: this.item.tags
    };

    this.navCtrl.push(AmChoosePage, params);
  }

  books() {
    console.log('books()');

    if (!this.item.books) { this.item.books = []; }

    var params = {
      isMultiSelect: true,
      title: "Choose Books",
      items: this.booksProvider.visibleBooks$, // [ {id: x, name: y}, ... ]
      selecteds: this.item.books
    };

    this.navCtrl.push(AmChoosePage, params);
  }

  save() {
    console.log('save()');

    if (!this.itemOrig) {
      this.items.create(this.item);
    } else {
      this.items.update(this.item, this.item);
    }

    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop();
    } else {
      this.navCtrl.push(ListMasterPage);
    }
  }

  cancel() {
    console.log('cancel()');

    this.item = Object.assign({}, this.itemOrig);
    this.mode = 'view';

    // this.navCtrl.pop();
    // this.navCtrl.setRoot(this.navCtrl.getByIndex(0).component);
    // this.navCtrl.pop();

    this.navCtrl.setRoot(ListMasterPage);
  }

  edit() {
    console.log('edit()');
    this.mode = 'edit';
  }
}
