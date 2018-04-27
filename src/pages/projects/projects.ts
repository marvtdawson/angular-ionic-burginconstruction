import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

}
