import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Soulments } from '../../providers/soulments';
import {Soulment} from "../../models/soulment";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  item: any;
  quoteText: string = 'Rethink "I\'ll be happy when..." to "I’m happy now because..."';
  placeholder: string = 'Add your pictures, video and notes here to create a Soulment.';
  placeholderTags: string = 'Add tag';
  placeholderBooks: string = 'Add Soulments book';

  constructor(public navCtrl: NavController, public soulments: Soulments) {
    this.item = new Soulment("TEST3");
  }

  quote() {
    console.log('quote()');
  }

  save() {
    console.log('save()');
    this.soulments.create(this.item);
  }
}
