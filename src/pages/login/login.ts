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
  firstName: string = 'Marvin';
  lastName: string = 'Dawson';
  middleName: string  = 'Terrell';

  pushForgotPasswordPage = ForgotPasswordPage;
  pushRegisterPage = RegisterPage;

  ionViewDidLoad(){
    this.printName(this.firstName, this.lastName, this.middleName);
  }

  printName(fName: string, lName: string, mName?: string): string{
    if(mName){
        return (fName + " " + mName + " " + lName);
      }
    else if(lName){
      return (fName + " " + lName);
    }
    else{
        return (fName);
    }
  }

  onSubmit(form: NgForm){
    console.log(form); // print values of input fields
  }
}


