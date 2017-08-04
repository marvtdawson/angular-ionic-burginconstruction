import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiteDataProvider } from "../../../providers/site-data/site-data";

@IonicPage()
@Component({
  selector: 'page-repair-services',
  templateUrl: 'repair-services.html',
})
export class RepairServicesPage {

  pageTitle: string = 'Request Repair Services';
  siteName: string = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public siteData: SiteDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepairServicesPage');
  }

}
