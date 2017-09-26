import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderBookPage } from './order-book';

@NgModule({
  declarations: [
    OrderBookPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderBookPage),
  ],
  exports: [
    OrderBookPage
  ]
})
export class OrderBookPageModule {}
