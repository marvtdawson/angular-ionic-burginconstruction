import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SiteDataProvider } from "../providers/site-data/site-data"
//import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { AuthProvider } from "../providers/auth/auth";
import { QuotePage } from "../pages/quotes/quotes";
//import { RegisterPage } from "../pages/register/register";
//import { ListPage } from '../pages/list/list';

import { AboutPage } from "../pages/corepages/about/about";
import { ContactUsPage } from "../pages/corepages/contact-us/contact-us";
import { ServicesPage } from "../pages/corepages/services/services";
import { TabsPage } from "../pages/tabs/tabs";
import { GalleryPage } from "../pages/gallery/gallery";


@Component({
  templateUrl: 'app.html'
})
export class BCqqApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage; // by default any is = HomePage; - using LoginPage for Authenticating root page
  loader: any;
  siteName: string  = this.siteData.siteName;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public modalCtrl: ModalController,
              public auth: AuthProvider,
              public loadingCtrl: LoadingController,
              public siteData: SiteDataProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: TabsPage},
      {title: 'About', component: AboutPage},
      {title: 'Services', component: ServicesPage},
      {title: 'Get Started', component: QuotePage},
      {title: 'Gallery', component: GalleryPage},
      {title: 'Login', component: LoginPage},
      {title: 'Contact Us', component: ContactUsPage}
    ];

    this.presentLoading(); // show loader

    this.auth.login()
      .then((isLoggedIn) => {
        if (isLoggedIn === true) {
          this.rootPage = AboutPage;
        } else {
          this.rootPage = HomePage;
        }
      this.loader.dismiss(); // remove loader
    });

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating...",
      duration: 3000
    });
    this.loader.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
