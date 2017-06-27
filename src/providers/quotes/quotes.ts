/**
 * Created by katan-hgmhub on 6/27/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Quotes {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getQuotes(){

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('http://localhost:8080/api/quotes')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  createQuotes(review){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/api/quotes', JSON.stringify(review), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteQuotes(id){

    this.http.delete('http://localhost:8080/api/quotes/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

}
