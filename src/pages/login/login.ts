import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { ForgotPasswordPage } from './forgot-password/forgot-password';
import { RegisterPage } from '../register/register';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginPage{
  constructor(public navCtrl: NavController){}
  pageTitle = 'Member Login';
  siteName = 'Burgin Construction LLC';
  pushForgotPasswordPage = ForgotPasswordPage;
  pushRegisterPage = RegisterPage;

  onSubmit(form: NgForm){
    console.log(form); // print values of input fields
  }
}


