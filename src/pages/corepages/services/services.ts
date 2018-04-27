import { Component } from "@angular/core";
import { SiteDataProvider } from "../../../providers/site-data/site-data"

@Component({
  selector: 'services',
  templateUrl: 'services.html'
})

export class ServicesPage {

  constructor(public siteData: SiteDataProvider){}

  pageTitle: string = 'Services';
  siteName:  string = this.siteData.siteName;

  servicesList = [
    {
      title: 'Remodeling',
      src: '../../assets/img/site/remodeling.jpg',
      service_icon: '/../assets/icon/icons8-more-24.png'
    },
    {
      title: 'Dry Wall',
      src: '../../assets/img/site/drywall-panels.jpg',
      service_icon: '/../assets/icon/icons8-more-24.png'
    },
    {
      title: 'Flooring',
      src: '../../assets/img/projs/angelas/floor/DSC00306.JPG',
      service_icon: '/../assets/icon/icons8-more-24.png'
    },
    {
      title: 'Siding',
      src: '../../assets/img/site/vinyl-siding-101-2017.jpg',
      service_icon: '/../assets/icon/icons8-more-24.png'
    },
    {
      title: 'Roofing',
      src: '../../assets/img/site/roofing.jpg',
      service_icon: '/../assets/icon/icons8-more-24.png'
    }
  ];

}
