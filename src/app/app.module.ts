import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from "../pages/about/about";
import { AdminLoginPage } from "../pages/admin-login/admin-login";
import { ContactUsPage } from "../pages/contact-us/contact-us";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { SubscribePage } from "../pages/subscribe/subscribe";
import { GalleryPage } from "../pages/gallery/gallery";
import { PrivatePolicyPage } from "../pages/private-policy/private-policy";
import { ProductsPage } from "../pages/products/products";
import { ServicesPage } from "../pages/services/services";
import { TermsAndConditionsPage } from "../pages/terms-and-conditions/terms-and-conditions";
import { BlogPage } from "../pages/blog/blog";
import { SplashHomePage } from "../pages/splash-home/splash-home";
import { QuotePage } from "../pages/quotes/quotes";

import { AuthProvider } from '../providers/auth/auth';
import { QuotesProvider } from '../providers/quotes/quotes';
import {AddQuotesPage} from "../pages/add-quotes/add-quotes";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    AdminLoginPage,
    ContactUsPage,
    ForgotPasswordPage,
    LoginPage,
    RegisterPage,
    SubscribePage,
    GalleryPage,
    PrivatePolicyPage,
    ProductsPage,
    ServicesPage,
    TermsAndConditionsPage,
    BlogPage,
    SplashHomePage,
    QuotePage,
    AddQuotesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdminLoginPage,
    ContactUsPage,
    ForgotPasswordPage,
    LoginPage,
    RegisterPage,
    AboutPage,
    SubscribePage,
    GalleryPage,
    PrivatePolicyPage,
    ProductsPage,
    ServicesPage,
    TermsAndConditionsPage,
    BlogPage,
    SplashHomePage,
    QuotePage,
    AddQuotesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    QuotesProvider,
  ]
})
export class AppModule {}
