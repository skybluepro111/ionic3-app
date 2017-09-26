import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { BookEditPage } from '../book-edit/book-edit';
import { OrderBookPage } from '../order-book/order-book';
import { Observable } from "rxjs/Observable";
import { Books } from "../../providers/books";
import { IBook } from "../../models/book";

@IonicPage()
@Component({
  selector: 'page-books-list',
  templateUrl: 'books-list.html',
})
export class BooksListPage {
  bookEditPage = BookEditPage;
  orderBookPage = OrderBookPage;

  items: Observable<IBook[]>;

  constructor(public books: Books) {
    this.items = books.visibleBooks$;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksListPage');
  }

  deleteItem(item) {
    this.books.remove(item);
  }
}
