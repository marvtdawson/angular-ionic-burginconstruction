import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NavController } from "ionic-angular";

@Component({
  selector: 'contact-us',
  templateUrl: 'contact-us.html'
})

export class ContactUsPage {
  constructor(public navCtrl: NavController){}
  pageTitle = 'Contact Us';
  siteName = 'Burgin Construction LLC';

  onSubmit(form: NgForm){
    console.log(form);
  }
}
