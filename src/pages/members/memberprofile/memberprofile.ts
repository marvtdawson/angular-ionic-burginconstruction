import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MemberprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-memberprofile',
  templateUrl: 'memberprofile.html',
})
export class MemberprofilePage {

  siteName = 'Burgin Construction LLC';
  pageTitle = 'Member Profile';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberprofilePage');
  }

}
