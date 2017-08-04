import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SiteDataProvider {

  siteName = 'Burgin Construction LLC';
  appVersion = 'v1.2';

  constructor(public http: Http) {
   /* console.log('Hello SiteDataProvider Provider');*/
  }

}
