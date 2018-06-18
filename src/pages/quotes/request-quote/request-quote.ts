import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SiteDataProvider} from "../../../providers/site-data/site-data";

/**
 * Generated class for the RequestQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-quote',
  templateUrl: 'request-quote.html',
})
export class RequestQuotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private siteData: SiteDataProvider) {
  }

  siteName = this.siteData.siteName;
  pageTitle = "Request A Quote";

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestQuotePage');
  }

}
