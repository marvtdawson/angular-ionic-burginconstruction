import { Component } from '@angular/core';
import { ForgotPasswordPage } from '../../pages/forgot-password/forgot-password';
import { RegisterPage } from '../../pages/register/register';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginPage{
  constructor(){}
  pageTitle = 'Member Login';
  //siteName = 'Burgin Construction LLC';
  pushForgotPasswordPage = ForgotPasswordPage;
  pushRegisterPage = RegisterPage;

  onSubmit(form: NgForm){
    console.log(form); // print values of input fields
  }
}


