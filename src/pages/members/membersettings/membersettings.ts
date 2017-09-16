import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiteDataProvider } from "../../../providers/site-data/site-data";
/**
 * Generated class for the MembersettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-membersettings',
  templateUrl: 'membersettings.html',
})
export class MembersettingsPage {

  // declare site vars
  pageTitle: string  = 'Member Settings';
  siteName: string  = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public siteData: SiteDataProvider) {
  }

}
