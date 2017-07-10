import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MembersettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-membersettings',
  templateUrl: 'membersettings.html',
})
export class MembersettingsPage {

  // declare site vars
  siteName = 'Burgin Construction LLC';
  pageTitle = 'Member Settings';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersettingsPage');
  }

}
