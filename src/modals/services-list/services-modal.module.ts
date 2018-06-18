import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesModal } from './services-modal';

@NgModule({
  declarations: [
    ServicesModal,
  ],
  imports: [
    IonicPageModule.forChild(ServicesModal),
  ],
})
export class ServicesModalModule {}
