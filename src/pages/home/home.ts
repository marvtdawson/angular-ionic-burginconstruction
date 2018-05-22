import { Component } from '@angular/core';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { ProjectsPage } from "../projects/projects";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private siteData: SiteDataProvider,
              private modalCtrl: ModalController) {}

  siteName = this.siteData.siteName;
  pageTitle = 'Home';

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
      src: '../../assets/img/projs/nicole/new_kitchen.jpg',
      img_alt: 'Nicole\'s Kitchen Fire Remodel',
      info_icon: '/../assets/icon/icons8-view-26.png'
    }
  ];

  servicesInfo = [
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

  presentProjectsInfoModal(){

    const projectsModalOption: ModalOptions = {
      enableBackdropDismiss: false
    };

    const projectModal: Modal = this.modalCtrl.create(ProjectsPage,
      {data: this.projectInfo},
      projectsModalOption);
    projectModal.present();

    projectModal.onDidDismiss((data) => {
      console.log(data);
    })
  }


}
