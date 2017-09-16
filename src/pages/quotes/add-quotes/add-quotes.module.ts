import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddQuotesPage } from './add-quotes';

@NgModule({
  declarations: [
    AddQuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddQuotesPage),
  ],
  exports: [
    AddQuotesPage
  ]
})
export class AddQuotesPageModule {}
