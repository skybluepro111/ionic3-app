import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { TagEditPage } from '../tag-edit/tag-edit';
import { Observable } from "rxjs/Observable";
import { Tags } from "../../providers/tags";
import {ITag, Tag} from "../../models/tag";

@IonicPage()
@Component({
  selector: 'page-tags-list',
  templateUrl: 'tags-list.html',
})
export class TagsListPage {
  tagEditPage = TagEditPage;

  items: Observable<ITag[]>;

  constructor(public tags: Tags) {
    this.items = tags.visibleTags$;

    // this.loadMockData();
  }

  loadMockData() {
    var localTags = ["Art & Creations", "Birthdays", "Faith ", "Family time", "Friends", "Funny ", "Hobbies", "Holidays ", "Inspiration ", "Little things ", "Milestones", "Mindful ", "Sayings ", "School", "Siblings  ", "Soulments", "Sports", "Vacations"];
    // localTags.forEach()
    for (let item of localTags) {
      console.log(item); // 1, "string", false
      var temp = new Tag();
      temp.name = item;

      this.tags.create(temp);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagsListPage');
  }

  deleteItem(item) {
    this.tags.remove(item);
  }
}
