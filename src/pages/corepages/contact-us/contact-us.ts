import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NavController } from "ionic-angular";
import { SiteDataProvider } from "../../../providers/site-data/site-data"

@Component({
  selector: 'contact-us',
  templateUrl: 'contact-us.html'
})

export class ContactUsPage {
  constructor(public navCtrl: NavController,
              public siteData: SiteDataProvider ){}

  pageTitle = 'Contact Us';

  // site data variables
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;

  onSubmit(form: NgForm){
    console.log(form);
  }
}
