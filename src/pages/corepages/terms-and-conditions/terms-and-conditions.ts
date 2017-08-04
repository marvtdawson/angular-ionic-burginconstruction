import { Component } from "@angular/core";
import { SiteDataProvider } from "../../../providers/site-data/site-data";

@Component({
  selector: 'terms-and-conditions',
  templateUrl: 'terms-and-conditions.html'
})

export class TermsAndConditionsPage{
  constructor(public siteData: SiteDataProvider){}

  pageTitle: string = 'Terms & Conditions';
  siteName: string  = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;
}
