import { Component} from "@angular/core";
import { SiteDataProvider } from "../../../providers/site-data/site-data";

@Component({
  selector: "private-policy",
  templateUrl: "private-policy.html"
})

export class PrivatePolicyPage{
  constructor(public siteData: SiteDataProvider){}

  pageTitle: string  = "Private Policy";
  siteName = this.siteData.siteName;
  appVersion = this.siteData.appVersion;
}
