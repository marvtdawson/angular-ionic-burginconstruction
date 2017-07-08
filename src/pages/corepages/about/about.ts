import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import { ContactUsPage} from '../contact-us/contact-us';
import { SubscribePage } from '../subscribe/subscribe';
import { MembersettingsPage } from '../../members/membersettings/membersettings';
import { MemberprofilePage } from '../../members/memberprofile/memberprofile';
import {HomePage} from "../../home/home";


@Component({
  selector: 'about',
  templateUrl: 'src/pages/corepages/about/about.html'
})

export class AboutPage {
  constructor(public navCtrl: NavController) {}
  pageTitle = 'About';
  contactus = './contact-us.html';
  pushContactPage = ContactUsPage;
  pushSubscribePage = SubscribePage;
  pushHomePage = HomePage;
  pushMemberSettingsPage = MembersettingsPage;
  pushMemberProfilePage = MemberprofilePage;
  siteName: string = 'Burgin Construction LLC';
}
