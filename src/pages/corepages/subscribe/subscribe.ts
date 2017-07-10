import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'subscribe',
  templateUrl: 'subscribe.html'
})

export class SubscribePage {
  constructor(public navCtrl: NavController) {}
  pageTitle = 'Subscribe';
  siteName = 'Burgin Construction LLC';

  onSubmit(form: NgForm){
    console.log(form);
  }
}
