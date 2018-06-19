import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from "../../pages/corepages/about/about";
import {ServicesPage} from "../../pages/corepages/services/services";
import {ContactUsPage} from "../../pages/corepages/contact-us/contact-us";
import {FinancePage} from "../../pages/corepages/finance/finance";
import {SiteDataProvider} from "../../providers/site-data/site-data";
import { AdminLoginPage } from "../../pages/auth/admin-login/admin-login";
import {CustomerLoginPage} from "../../pages/customers/customer-login/customer-login";
import {GalleryPage} from "../../pages/gallery/gallery";


@IonicPage()
@Component({
  selector: 'page-app-footer',
  templateUrl: 'app-footer.html',
})
export class AppFooterPage {

  pushAboutPage = AboutPage;
  pushServicesPage = ServicesPage;
  pushCustomerLogin = CustomerLoginPage; // Payment link redirect to CustomerLogin
  pushContactPage = ContactUsPage;




  pushFinancePage = FinancePage;
  pushGalleryPage = GalleryPage;

  pushAdminLoginPage = AdminLoginPage;

  siteName = this.siteData.siteName;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private siteData: SiteDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppFooterPage');
  }

}
