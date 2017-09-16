import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersettingsPage } from './membersettings';

@NgModule({
  declarations: [
    MembersettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(MembersettingsPage),
  ],
  exports: [
    MembersettingsPage
  ]
})
export class MembersettingsPageModule {}
