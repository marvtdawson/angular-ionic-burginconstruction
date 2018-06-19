import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminRawMaterialsPage } from './admin-raw-materials';

@NgModule({
  declarations: [
    AdminRawMaterialsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminRawMaterialsPage),
  ],
})
export class AdminRawMaterialsPageModule {}
