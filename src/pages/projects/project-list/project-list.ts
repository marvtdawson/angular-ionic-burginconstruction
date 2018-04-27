import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjectsListService} from "../../../services/project-list";
import { SiteDataProvider } from "../../../providers/site-data/site-data";

@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})

export class ProjectsListPage {

  constructor(private projlistServic: ProjectsListService,
              public navCtrl: NavController,
              public navParams: NavParams,
              private siteData: SiteDataProvider) {}

              siteName = this.siteData.siteName;

}
