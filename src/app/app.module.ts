import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { Network } from "@ionic-native/network";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdminLoginPage } from "../pages/admin-login/admin-login";
import { ContactUsPage } from "../pages/corepages/contact-us/contact-us";
import { ForgotPasswordPage } from "../pages/login/forgot-password/forgot-password";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { SubscribePage } from "../pages/corepages/subscribe/subscribe";
import { GalleryPage } from "../pages/gallery/gallery";
import { PrivatePolicyPage } from "../pages/corepages/private-policy/private-policy";
import { ServicesPage } from "../pages/corepages/services/services";
import { TermsAndConditionsPage } from "../pages/corepages/terms-and-conditions/terms-and-conditions";
import { SplashHomePage } from "../pages/splash-home/splash-home";
import { QuotePage } from "../pages/quotes/quotes";
import { MembersettingsPage } from "../pages/members/membersettings/membersettings";
import { MemberprofilePage } from "../pages/members/memberprofile/memberprofile";


import { AuthProvider } from '../providers/auth/auth';
import { QuotesProvider } from '../providers/quotes/quotes';
import { MakeQuotesPage } from "../pages/quotes/make-quotes/make-quotes";
import { RepairServicesPage } from "../pages/quotes/repair-services/repair-services";
import { ProjectsListService } from "../services/project-list";
import { SiteDataProvider } from '../providers/site-data/site-data';
import { TabsPage} from "../pages/tabs/tabs";
import { ModalPage } from "../pages/modal/modal";
import { ProjectsPage } from "../pages/projects/projects";
import {AboutPage} from "../pages/corepages/about/about";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdminLoginPage,
    ContactUsPage,
    ForgotPasswordPage,
    LoginPage,
    RegisterPage,
    SubscribePage,
    GalleryPage,
    PrivatePolicyPage,
    ServicesPage,
    TermsAndConditionsPage,
    SplashHomePage,
    QuotePage,
    MakeQuotesPage,
    RepairServicesPage,
    MemberprofilePage,
    MembersettingsPage,
    TabsPage,
    ModalPage,
    ProjectsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
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
    SubscribePage,
    GalleryPage,
    PrivatePolicyPage,
    ServicesPage,
    TermsAndConditionsPage,
    SplashHomePage,
    QuotePage,
    MakeQuotesPage,
    RepairServicesPage,
    MemberprofilePage,
    MembersettingsPage,
    TabsPage,
    ModalPage,
    ProjectsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    QuotesProvider,
    ProjectsListService,
    SiteDataProvider,
    Network,

  ]
})
export class AppModule {}
