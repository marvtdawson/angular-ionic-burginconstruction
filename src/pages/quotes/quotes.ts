import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { AddQuotesPage } from '../add-quotes/add-quotes';
import { QuotesProvider } from '../../providers/quotes/quotes';

@Component({
  selector: 'quotes',
  templateUrl: 'quotes.html'
})
export class QuotePage {

  quotes: any;
  siteName = 'Burgin Construction LLC';

  constructor(public nav: NavController,
              public quoteService: QuotesProvider,
              public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){

    this.quoteService.getQuotes().then((data) => {
      console.log(data);
      this.quotes = data;
    });

  }

  addQuotes(){

    let modal = this.modalCtrl.create(AddQuotesPage);

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
