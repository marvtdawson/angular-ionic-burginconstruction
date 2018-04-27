import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestQuotePage } from './request-quote';

@NgModule({
  declarations: [
    RequestQuotePage,
  ],
  imports: [
    IonicPageModule.forChild(RequestQuotePage),
  ],
})
export class RequestQuotePageModule {}
