import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from "../corepages/about/about";
import {ServicesPage} from "../corepages/services/services";
import {ContactUsPage} from "../corepages/contact-us/contact-us";
import {FinancePage} from "../corepages/finance/finance";


@IonicPage()
@Component({
  selector: 'page-app-footer',
  templateUrl: 'app-footer.html',
})
export class AppFooterPage {

  pushAboutPage = AboutPage;
  pushServicesPage = ServicesPage;
  pushFinancePage = FinancePage;
  pushContactPage = ContactUsPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppFooterPage');
  }

}
