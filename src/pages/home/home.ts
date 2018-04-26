import { Component } from '@angular/core';
import { NavController, Modal, ModalController, ModalOptions } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { ModalPage } from "../modal/modal";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
              private siteData: SiteDataProvider,
              private modalCtrl: ModalController) {}

  siteName = this.siteData.siteName;
  pageTitle = 'Home';

  @ViewChild(Slides) slides: Slides;

  goToSlide(){
    this.slides.slideTo(2, 500);
  }

  projectInfo = [
    {
      title: 'Randall\'s Kitchen',
      project_name: 'New Cabinets • 2018',
      src: '../../assets/img/projs/randalls/DSC_0018.jpg',
      img_alt: 'Randall\'s Kitchen Marble Counter',
      info_icon: '/../assets/icon/icons8-view-26.png'
    },
    {
      title: 'Brian\'s Bathroom',
      project_name: 'Complete Remodel • 2016',
      src: '../../assets/img/projs/brians_bathroom/P1020725.JPG',
      img_alt: 'Brian\'s Bathroom Remodel',
      info_icon: '/../assets/icon/icons8-view-26.png'
    },
    {
      title: 'Nicole\'s Kitchen',
      project_name: 'Fire Damage• 2014',
      src: '../../assets/img/projs/nicole/2014-05-16%2017.46.50.jpg',
      img_alt: 'Nicole\'s Kitchen Fire Remodel',
      info_icon: '/../assets/icon/icons8-view-26.png'
    }
  ];

  serviceInfo = [
    {
      title: 'Remodeling',
      src: '../../assets/img/site/remodeling.jpg',
      info_icon: '/../assets/icon/icons8-more-24.png'
    },
    {
      title: 'Dry Wall',
      src: '../../assets/img/site/drywall-panels.jpg',
      info_icon: '/../assets/icon/icons8-more-24.png'
    },
    {
      title: 'Flooring',
      src: '../../assets/img/projs/angelas/floor/DSC00306.JPG',
      info_icon: '/../assets/icon/icons8-more-24.png'
    },
    {
      title: 'Siding',
      src: '../../assets/img/site/vinyl-siding-101-2017.jpg',
      info_icon: '/../assets/icon/icons8-more-24.png'
    },
    {
      title: 'Roofing',
      src: '../../assets/img/site/roofing.jpg',
      info_icon: '/../assets/icon/icons8-more-24.png'
    }
  ];

  presentProjectsInfoModal(){

    const projectsModalOption: ModalOptions = {
      enableBackdropDismiss: false
    };

    const projectModal: Modal = this.modalCtrl.create(ModalPage,
      {data: this.projectInfo},
      projectsModalOption);
    projectModal.present();

    projectModal.onDidDismiss((data) => {
      console.log(data);
    })
  }


}
