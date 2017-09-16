import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { AddQuotesPage } from './add-quotes/add-quotes';

@NgModule({
  declarations: [
    QuotesProvider,
  ],
  imports: [
    IonicPageModule.forChild(QuotesProvider),
  ],
  exports: [
    QuotesProvider
  ]
})
export class QuotesPageModule {}
