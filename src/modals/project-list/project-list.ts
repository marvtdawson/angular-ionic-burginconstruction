import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiteDataProvider } from "../../providers/site-data/site-data";

@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})

export class ProjectsListPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private siteData: SiteDataProvider) {}

              siteName = this.siteData.siteName;

}
