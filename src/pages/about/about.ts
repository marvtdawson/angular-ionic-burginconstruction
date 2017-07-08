import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import { ContactUsPage} from '../../pages/contact-us/contact-us';
import { SubscribePage } from '../../pages/subscribe/subscribe';


@Component({
  selector: 'about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public navCtrl: NavController) {}
  pageTitle = 'About';
  contactus = './contact-us.html';
  pushContactPage = ContactUsPage;
  pushSubscribePage = SubscribePage;
  siteName = 'Burgin Construction LLC';
}
