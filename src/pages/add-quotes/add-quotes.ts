import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'add-quotes',
  templateUrl: 'add-quotes.html'
})
export class AddQuotesPage {

  title: any;
  description: any;
  quote: any;

  constructor(public viewCtrl: ViewController) {

  }

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
