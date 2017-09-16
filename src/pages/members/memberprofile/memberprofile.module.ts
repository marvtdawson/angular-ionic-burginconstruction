import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberprofilePage } from './memberprofile';

@NgModule({
  declarations: [
    MemberprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(MemberprofilePage),
  ],
  exports: [
    MemberprofilePage
  ]
})
export class MemberprofilePageModule {}
