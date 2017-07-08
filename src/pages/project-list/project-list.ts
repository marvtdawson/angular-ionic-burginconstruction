import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjectListService} from "../../services/project-list";

@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage {

  constructor(private projlistServic: ProjectListService,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }



}
