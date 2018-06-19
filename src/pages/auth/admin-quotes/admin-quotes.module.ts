import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminQuotesPage } from './admin-quotes';

@NgModule({
  declarations: [
    AdminQuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminQuotesPage),
  ],
})
export class AdminQuotesPageModule {}
