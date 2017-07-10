import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjectsListService} from "../../services/project-list";

@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectsListPage {

  constructor(private projlistServic: ProjectsListService,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }



}
