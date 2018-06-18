import { Component } from '@angular/core';
import {NavController, ToastController} from "ionic-angular";
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { AngularFireAuth } from "angularfire2/auth";
import { UserAccountInterface } from "../../models/user-account/user-account.interface";

//import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../login/login';


@Component({
  selector: 'register',
  templateUrl: 'register.html'
})

export class RegisterPage{

  constructor(public navCtrl: NavController,
              public siteData: SiteDataProvider,
              private afAuth: AngularFireAuth,
              private toastCtrl: ToastController){}

  userAccount = {} as UserAccountInterface;
  pageTitle: string  = 'Sign Up';
  siteName: string = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;
  pushLoginPage = LoginPage;

  async onRegister(){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.userAccount.email, this.userAccount.password);
      this.toastCtrl.create({
        message: "Account Has Been Successfully Created.",
        duration: 3000
      }).present();
      console.log(result);
    }
    catch (e) {
      console.error(e);
      this.toastCtrl.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }

 /* onSubmit(form: NgForm){
    console.log(form); // print values of input fields
  }*/
}

