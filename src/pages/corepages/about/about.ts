import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { ContactUsPage } from '../contact-us/contact-us';
import {SiteDataProvider} from "../../../providers/site-data/site-data";
import {TeamBurginPage} from "../team-burgin/team-burgin";


@Component({
  selector: 'about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public navCtrl: NavController, public siteData: SiteDataProvider) {}

  // site data variables
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;

  pageTitle: string = 'About';
  pushContactPage = ContactUsPage;
  pushTeamBurgin = TeamBurginPage;
}
