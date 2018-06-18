import { Component, OnInit } from '@angular/core';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { Projects } from "../../models/projects/projects.interface";
import { PROJECTS } from '../../mock-data/projects';
import { SERVICES } from "../../mock-data/services";
import { ProjectsModal } from "../../modals/projects/projects-modal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(private siteData: SiteDataProvider,
              private modalCtrl: ModalController) {}

  siteName = this.siteData.siteName;
  pageTitle = 'Home';

  projects = PROJECTS;
  services = SERVICES;

  ngOnInit(){
    console.log(this.projects);
    /*this.projectsCollection = this.projects;
    console.log(this.projectsCollection);*/
  }

  presentProjectsInfoModal(project: Projects){
    const projectsModalOption: ModalOptions = {
        enableBackdropDismiss: false
    };

    const projectModal: Modal = this.modalCtrl.create(ProjectsModal, project, projectsModalOption);
    projectModal.present();

     /* projectModal.onDidDismiss((data) => {
        console.log(data);
      })
      */
    }


}
