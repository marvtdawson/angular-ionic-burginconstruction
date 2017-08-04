import { Component } from "@angular/core";
import { SiteDataProvider } from "../../../providers/site-data/site-data";

@Component({
  selector: 'products',
  templateUrl: 'products.html'
})

export class ProductsPage {
  constructor(public siteData: SiteDataProvider) {}

  pageTitle: string  = "Products";
  siteName: string = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;
}
