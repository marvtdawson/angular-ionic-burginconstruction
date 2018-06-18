import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'services-modal.html',
})
export class ServicesModal {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  closeModal() {
    const data = {
      title: 'Beautyrest',
      src: '/../assets/img/matts/beautyrest_black_mariela.png'
    };
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
