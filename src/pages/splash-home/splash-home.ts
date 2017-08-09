import {Component, Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SiteDataProvider} from "../../providers/site-data/site-data";
import { Network } from '@ionic-native/network';

@Injectable()
@IonicPage()
@Component({
  selector: 'page-splash-home',
  templateUrl: 'splash-home.html',
})
export class SplashHomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public siteData: SiteDataProvider,
              private network: Network
              ) {
  }

  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;


  // watch network for a connection
  public connectSubscription = this.network.onConnect().subscribe(() => {

    console.log('network connected!');

    // We just got a connection but we need to wait briefly
    // before we determine the connection type. Might need to wait.
    // prior to doing any api requests as well.

    /*setTimeout(() => {
      if (this.network.type === 'wifi') {
        console.log('we got a wifi connection, woohoo!');
      }
    }, 3000);

*/

  });
}
