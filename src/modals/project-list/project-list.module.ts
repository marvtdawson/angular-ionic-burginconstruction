import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectsListPage } from './project-list';

@NgModule({
  declarations: [
    ProjectsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsListPage),
  ],
  exports: [
    ProjectsListPage
  ]
})
export class ProjectListPageModule {}
