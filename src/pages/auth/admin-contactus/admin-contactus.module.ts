import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminContactusPage } from './admin-contactus';

@NgModule({
  declarations: [
    AdminContactusPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminContactusPage),
  ],
})
export class AdminContactusPageModule {}
