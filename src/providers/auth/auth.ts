import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthProvider {

  constructor(public http: HttpModule) {
   /* console.log('HttpModule Connected');*/
  }


  /**
   * Check if user is logged in.  The login function will consist of
   * both a website check with no loader function and a mobile check that
   * will include a loader function to display at run time.
   */

 login(){
       return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(false);
        }, 3000);
      });


  }
}
