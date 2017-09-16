import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepairServicesPage } from './repair-services';

@NgModule({
  declarations: [
    RepairServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(RepairServicesPage),
  ],
  exports: [
    RepairServicesPage
  ]
})
export class RepairServicesPageModule {}
