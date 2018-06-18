import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppHeaderPage } from './app-header';

@NgModule({
  declarations: [
    AppHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(AppHeaderPage),
  ],
})
export class AppHeaderPageModule {}
