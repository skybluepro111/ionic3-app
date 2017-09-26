import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { IMindful, Mindful } from '../models/mindful';

@Injectable()
export class MindfulsProvider {
  visibleMindfuls$: Observable<IMindful[]>;
  private datas: Array<IMindful> = [];

  constructor(public http: Http) {
    // MOCK
    var item = new Mindful();
    item.imageUrl = "http://www.soulments.com/wp-content/uploads/2017/07/fre-sonneveld-1771-750x490.jpg";
    item.title = "Guided Practice: A Meditation of Alignment";
    item.url = 'http://www.soulments.com/2017/06/03/guided-practice-a-meditation-of-alignment/';

    this.datas.push(item);
    this.datas.push(item);
    this.datas.push(item);

    this.visibleMindfuls$ =  Observable.of(this.datas); // as Observable<IMindful[]>;
    // end MOCK

    //TODO: Load posts from Wordpress.
    //TODO: Load only posts with 'mindful-corner' tag.
    //e.g. http://www.soulments.com/wp-json/wp/v2/posts?tags=27
    //TODO: Extract title, displayed image & post URL (perhaps this occurs in Mindful class.)
  }

}
