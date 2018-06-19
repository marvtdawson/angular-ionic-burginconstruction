import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAddProjectPage } from './admin-add-project';

@NgModule({
  declarations: [
    AdminAddProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAddProjectPage),
  ],
})
export class AdminAddProjectPageModule {}
