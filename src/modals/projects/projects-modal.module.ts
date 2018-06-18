import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectsModal } from './projects-modal';

@NgModule({
  declarations: [
    ProjectsModal,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsModal),
  ],
})
export class ProjectsModalModule {}
