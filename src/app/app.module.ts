import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { Network } from "@ionic-native/network";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from "./app-firebase-config";

// Pages
import { BCqqApp } from './app.component';
import { AppHeaderPage } from "./app-header/app-header";
import { AppFooterPage } from "./app-footer/app-footer";
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/corepages/about/about";
import { TabsPage } from "../pages/tabs/tabs";
import { ListPage } from '../pages/list/list';
import { ContactUsPage } from "../pages/corepages/contact-us/contact-us";
import { ForgotPasswordPage } from "../pages/login/forgot-password/forgot-password";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { SubscribePage } from "../pages/corepages/subscribe/subscribe";
import { GalleryPage } from "../pages/gallery/gallery";
import { PrivatePolicyPage } from "../pages/corepages/private-policy/private-policy";
import { ServicesPage } from "../pages/corepages/services/services";
import { TermsAndConditionsPage } from "../pages/corepages/terms-and-conditions/terms-and-conditions";
import { QuotePage } from "../pages/quotes/quotes";
import { MembersettingsPage } from "../pages/members/membersettings/membersettings";
import { MemberprofilePage } from "../pages/members/memberprofile/memberprofile";
import { RepairServicesPage } from "../pages/quotes/repair-services/repair-services";
import { MakeQuotesPage } from "../pages/quotes/make-quotes/make-quotes";
import { FinancePage} from "../pages/corepages/finance/finance";
import { RequestQuotePage } from "../pages/quotes/request-quote/request-quote";
import { AdminLoginPage } from "../pages/auth/admin-login/admin-login";

// Modals
import { ProjectsModal } from "../modals/projects/projects-modal";
import { ServicesModal } from "../modals/services-list/services-modal";

// Providers
import { AuthProvider } from '../providers/auth/auth';
import { QuotesProvider } from '../providers/quotes/quotes';
import { SiteDataProvider } from '../providers/site-data/site-data';

// Services
import { ProjectsListService } from "../services/project-list";


@NgModule({
  declarations: [
    BCqqApp,
    HomePage,
    ListPage,
    ContactUsPage,
    ForgotPasswordPage,
    LoginPage,
    RegisterPage,
    SubscribePage,
    GalleryPage,
    PrivatePolicyPage,
    ServicesPage,
    TermsAndConditionsPage,
    QuotePage,
    MakeQuotesPage,
    RepairServicesPage,
    MemberprofilePage,
    MembersettingsPage,
    TabsPage,
    ServicesModal,
    ProjectsModal,
    AboutPage,
    AppHeaderPage,
    AppFooterPage,
    FinancePage,
    RequestQuotePage,
    AdminLoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(BCqqApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BCqqApp,
    HomePage,
    ListPage,
    ContactUsPage,
    ForgotPasswordPage,
    LoginPage,
    RegisterPage,
    SubscribePage,
    GalleryPage,
    PrivatePolicyPage,
    ServicesPage,
    TermsAndConditionsPage,
    QuotePage,
    MakeQuotesPage,
    RepairServicesPage,
    MemberprofilePage,
    MembersettingsPage,
    TabsPage,
    ServicesModal,
    ProjectsModal,
    AboutPage,
    AppHeaderPage,
    AppFooterPage,
    FinancePage,
    RequestQuotePage,
    AdminLoginPage
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
    AngularFireDatabase

  ]
})
export class AppModule {}
