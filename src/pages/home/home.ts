import { Component, OnInit } from '@angular/core';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { SiteDataProvider } from "../../providers/site-data/site-data";
import { ProjectsPage } from "../projects/projects";
import { ProjectsInterface } from "../../data/projects.interface";
//import project from '../../data/projects';
import { PROJECTS } from '../../data/projects';
import { SERVICES } from "../../data/services";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(private siteData: SiteDataProvider,
              private modalCtrl: ModalController) {}

  siteName = this.siteData.siteName;
  pageTitle = 'Home';

  //projectsCollection: {project: ProjectsInterface[]}[];
  projects = PROJECTS;
  services = SERVICES;


  ngOnInit(){
    console.log(this.projects);
    /*this.projectsCollection = this.projects;
    console.log(this.projectsCollection);*/
  }

  presentProjectsInfoModal(){

    const projectsModalOption: ModalOptions = {
      enableBackdropDismiss: false
    };

   /* const projectModal: Modal = this.modalCtrl.create(ProjectsPage,
      {data: this.projectsCollection},
      projectsModalOption);
    projectModal.present();

    projectModal.onDidDismiss((data) => {
      console.log(data);
    })
    */
  }


}
