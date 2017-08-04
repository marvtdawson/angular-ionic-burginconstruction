import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { ContactUsPage } from '../contact-us/contact-us';
import { SubscribePage } from '../subscribe/subscribe';
import { MembersettingsPage } from '../../members/membersettings/membersettings';
import { MemberprofilePage } from '../../members/memberprofile/memberprofile';
import { HomePage } from '../../home/home';
import {SiteDataProvider} from "../../../providers/site-data/site-data";


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
  pushSubscribePage = SubscribePage;
  pushHomePage = HomePage;
  pushMemberSettingsPage = MembersettingsPage;
  pushMemberProfilePage = MemberprofilePage;
}
