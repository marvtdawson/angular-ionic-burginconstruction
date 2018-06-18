import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects-modal.html',
})
export class ProjectsModal implements OnInit {

  id: string;
  customer: string;
  project_type: string;
  src: string;
  img_alt: string;
  info_icon: string;
  quick_summary: string;
  project_resolution: string;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {
  }

  ngOnInit(){
    this.customer = this.navParams.get('customer');
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.customer = this.navParams.get('customer');
    this.project_type = this.navParams.get('project_name');
    this.src = this.navParams.get('src');
    this.img_alt = this.navParams.get('img_alt');
    this.info_icon = this.navParams.get('info.icon');
    this.quick_summary = this.navParams.get('quick_summary');
    this.project_resolution = this.navParams.get('project_resolution');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
