import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'forgot-password',
  templateUrl: 'forgot-password.html'
})

export class ForgotPasswordPage{
  constructor(public navCtrl: NavController){}
  pageTitle = 'Forgot Password';
  siteName = 'Burgin Construction LLC';

 /*function resetUserPassword(){

  }*/

  onSubmit(form: NgForm){
    console.log(form); // print values of input fields
  }

}
