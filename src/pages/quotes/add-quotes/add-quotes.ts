import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'add-quotes',
  templateUrl: 'src/pages/quotes/add-quotes/add-quotes.html'
})
export class AddQuotesPage {

  title: any;
  description: any;
  quote: any;

  constructor(public viewCtrl: ViewController) {

  }

  siteName = 'Burgin Construction LLC';

  save(): void {

    let quote = {
      title: this.title,
      description: this.description,
      quote: this.quote
    };

    this.viewCtrl.dismiss(quote);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }
}
