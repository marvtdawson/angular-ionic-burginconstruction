import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SiteDataProvider} from "../../providers/site-data/site-data";
import { HomePage } from "../home/home";
import {AboutPage} from "../corepages/about/about";
import {ContactUsPage} from "../corepages/contact-us/contact-us";
import { GalleryPage } from "../gallery/gallery";

/**
 * Generated class for the AppHeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-header',
  templateUrl: 'app-header.html',
})
export class AppHeaderPage {

  pushAboutPage = AboutPage;
  pushGalleryPage = GalleryPage;
  pushContactUsPage = ContactUsPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private siteData: SiteDataProvider) {
  }
  siteName = this.siteData.siteName;
  siteLogo = this.siteData.siteLogo;

  navigateToHomePage(){
   this.navCtrl.popTo(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppHeaderPage');
  }

}
