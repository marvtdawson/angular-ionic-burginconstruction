import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from "../../pages/corepages/about/about";
import {ServicesPage} from "../../pages/corepages/services/services";
import {ContactUsPage} from "../../pages/corepages/contact-us/contact-us";
import {FinancePage} from "../../pages/corepages/finance/finance";


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
