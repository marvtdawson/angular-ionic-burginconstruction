import { Component } from "@angular/core";
import { SiteDataProvider } from "../../../providers/site-data/site-data"

@Component({
  selector: 'services',
  templateUrl: 'services.html'
})

export class ServicesPage{
  constructor(public siteData: SiteDataProvider){}

  pageTitle: string = 'Services';
  siteName:  string = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;
}
