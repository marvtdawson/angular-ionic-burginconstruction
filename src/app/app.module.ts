import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { Network } from "@ionic-native/network";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Pages
import { BCqqApp } from './app.component';
import { AppHeaderPage } from "../pages/app-header/app-header";
import { AppFooterPage } from "../pages/app-footer/app-footer";
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/corepages/about/about";
import { TabsPage } from "../pages/tabs/tabs";
import { ListPage } from '../pages/list/list';
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
import { RepairServicesPage } from "../pages/quotes/repair-services/repair-services";
import { MakeQuotesPage } from "../pages/quotes/make-quotes/make-quotes";
import { ProjectsPage } from "../pages/projects/projects";
import { ModalPage } from "../pages/modal/modal";
import {FinancePage} from "../pages/corepages/finance/finance";

// Provider - Services
import { AuthProvider } from '../providers/auth/auth';
import { QuotesProvider } from '../providers/quotes/quotes';
import { ProjectsListService } from "../services/project-list";
import { SiteDataProvider } from '../providers/site-data/site-data';


@NgModule({
  declarations: [
    BCqqApp,
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
    AboutPage,
    AppHeaderPage,
    AppFooterPage,
    FinancePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(BCqqApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BCqqApp,
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
    AboutPage,
    AppHeaderPage,
    AppFooterPage,
    FinancePage
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
