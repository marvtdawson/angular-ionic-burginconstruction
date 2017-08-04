import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { ForgotPasswordPage } from './forgot-password/forgot-password';
import { RegisterPage } from '../register/register';
import { NgForm } from "@angular/forms";
import { SiteDataProvider } from "../../providers/site-data/site-data";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginPage{
  constructor(public navCtrl: NavController,
              public siteData: SiteDataProvider){}

  pageTitle: string = 'Member Login';
  siteName: string  = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;

  pushForgotPasswordPage = ForgotPasswordPage;
  pushRegisterPage = RegisterPage;

  onSubmit(form: NgForm){
    console.log(form); // print values of input fields
  }
}


