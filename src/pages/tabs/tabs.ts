import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { QuotePage } from "../quotes/quotes";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any;
 /* tab2Root: any;
  tab3Root: any;*/

  constructor() {
    this.tab1Root = QuotePage;
    /*this.tab2Root = TenantsPage;
    this.tab3Root = SendNotificationsPage;
*/
  }


}
