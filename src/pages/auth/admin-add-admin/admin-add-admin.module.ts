import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAddAdminPage } from './admin-add-admin';

@NgModule({
  declarations: [
    AdminAddAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAddAdminPage),
  ],
})
export class AdminAddAdminPageModule {}
