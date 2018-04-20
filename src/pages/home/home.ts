import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SiteDataProvider } from "../../providers/site-data/site-data";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private siteData: SiteDataProvider) {}

  siteName = this.siteData.siteName;
  pageTitle = 'Home';

  @ViewChild(Slides) slides: Slides;

  goToSlide(){
    this.slides.slideTo(2, 500);
  }



}
