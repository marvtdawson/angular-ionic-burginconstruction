import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
//import { IonicStorageModule } from '@ionic/storage';
import { NgForm } from '@angular/forms';
import { NavController } from "ionic-angular";

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})

export class RegisterPage{

  constructor(public navCtrl: NavController){}
  pageTitle = 'Sign Up';
  siteName = 'Burgin Construction';
  pushLoginPage = LoginPage;

  //currRegMemEmail = localStorage.setItem('regUserEmail', 'marvintdawson@gmail.com');

  onSubmit(form: NgForm){
    console.log(form); // print values of input fields
  }
}

