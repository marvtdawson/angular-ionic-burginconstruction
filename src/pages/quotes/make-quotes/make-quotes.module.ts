import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeQuotesPage } from './make-quotes';

@NgModule({
  declarations: [
    MakeQuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeQuotesPage),
  ],
  exports: [
    MakeQuotesPage
  ]
})
export class AddQuotesPageModule {}
