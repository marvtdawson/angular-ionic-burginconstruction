import { Component } from '@angular/core';
import { ContactUsPage} from '../../pages/contact-us/contact-us';
import {NavController} from "ionic-angular";

@Component({
  selector: 'about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public navCtrl: NavController) {}
  pageTitle = 'About';
  contactus = './contact-us.html';
  pushContactPage = ContactUsPage;
  siteName = 'Burgin Construction';
}
