import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { MakeQuotesPage } from './make-quotes/make-quotes';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { RepairServicesPage } from "./repair-services/repair-services";
import { SiteDataProvider } from "../../providers/site-data/site-data";

@Component({
  selector: 'quotes',
  templateUrl: 'quotes.html'
})

export class QuotePage {
  quotes: any;
  siteName: string = this.siteData.siteName;
  appVersion: string = this.siteData.appVersion;

  pushRepairServicesPage = RepairServicesPage;

  constructor(public nav: NavController,
              public quoteService: QuotesProvider,
              public modalCtrl: ModalController,
              public siteData: SiteDataProvider) {}

  ionViewDidLoad(){

    this.quoteService.getQuotes().then((data) => {
      console.log(data);
      this.quotes = data;
    });

  }

  addQuotes(){

    let modal = this.modalCtrl.create(MakeQuotesPage);

    modal.onDidDismiss(quote => {
      if(quote){
        this.quotes.push(quote);
        this.quoteService.createQuotes(quote);
      }
    });

    modal.present();

  }

  deleteQuotes(quote){

    //Remove locally
    let index = this.quotes.indexOf(quote);

    if(index > -1){
      this.quotes.splice(index, 1);
    }

    //Remove from database
    this.quoteService.deleteQuotes(quote._id);
  }

}
