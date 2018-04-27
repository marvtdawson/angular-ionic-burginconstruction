import { Component } from '@angular/core';
import {MakeQuotesPage} from "../quotes/make-quotes/make-quotes";
import {RegisterPage} from "../register/register";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>
      <ion-tab [root]="makeQuotePage" tabTitle="Quote" tabIcon="quote"></ion-tab>
      <ion-tab [root]="registerPage" tabTitle="Register" tabIcon="paper"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  homePage = HomePage;
  makeQuotePage = MakeQuotesPage;
  registerPage = RegisterPage;
}
