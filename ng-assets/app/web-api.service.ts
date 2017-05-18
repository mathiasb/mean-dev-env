import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './models';

@Injectable()
export class WebApiService {
  private paypal_url:string;

  constructor(private http:Http) {
    this.paypal_url = 'https://api.paypal.com';
  }

  getUsers(localUsers: User[]) {
    this.get('/users').subscribe(
      users => {
        for (var u of users) {
          localUsers.push(u);
        }
        console.log(localUsers);
      },
      err => {
        console.log('Error: ' + err);
        return null;
      }
    );
  }

  authenticatePaypal(client_id: string, client_secret: string) {

  }

  private get(url: string): Observable<any> {
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
