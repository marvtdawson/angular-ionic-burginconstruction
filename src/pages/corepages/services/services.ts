import { Component } from "@angular/core";
import { SiteDataProvider } from "../../../providers/site-data/site-data"
import {SERVICES} from "../../../data/services";

@Component({
  selector: 'services',
  templateUrl: 'services.html'
})

export class ServicesPage {

  constructor(public siteData: SiteDataProvider){}

  pageTitle: string = 'Services';
  siteName:  string = this.siteData.siteName;

  // service data const
  services = SERVICES;

}
