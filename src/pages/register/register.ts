import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from "ionic-angular";
import { SiteDataProvider } from "../../providers/site-data/site-data";
//import { IonicStorageModule } from '@ionic/storage';

import { LoginPage } from '../login/login';


@Component({
  selector: 'register',
  templateUrl: 'register.html'
})

export class RegisterPage{

  constructor(public navCtrl: NavController,
              public siteData: SiteDataProvider ){}

  pageTitle: string  = 'Sign Up';
  siteName: string = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;
  pushLoginPage = LoginPage;

  onSubmit(form: NgForm){
    console.log(form); // print values of input fields
  }
}

