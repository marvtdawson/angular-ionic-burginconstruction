import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SiteDataProvider } from "../../../providers/site-data/site-data";

@Component({
  selector: 'subscribe',
  templateUrl: 'subscribe.html'
})

export class SubscribePage {
  constructor(public navCtrl: NavController,
              public siteData: SiteDataProvider) {}

  pageTitle: string = 'Subscribe';
  siteName: string  = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;

  onSubmit(form: NgForm){
    console.log(form);
  }
}
