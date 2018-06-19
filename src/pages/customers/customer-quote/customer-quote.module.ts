import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerQuotePage } from './customer-quote';

@NgModule({
  declarations: [
    CustomerQuotePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerQuotePage),
  ],
})
export class CustomerQuotePageModule {}
