import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './models';

@Injectable()
export class WebApiService {
  private production_host:string;
  private paypal_url:string;
  private base_url:string;

  constructor(private http:Http) {
    this.production_host = 'https://immense-crag-31097.herokuapp.com/'
    this.base_url = (!/localhost/.test(document.location.host)) ?
      this.production_host : 'http://localhost:4001/'
    this.paypal_url = 'https://api.paypal.com';
  }

  getUsers(localUsers: User[]) {
    this.get('users').subscribe(
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

  deleteUser(localUser: User) {
    this.remove('users/' + localUser.id).subscribe(
      user => {
        console.log('Deleted user ' + user.email);
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
    console.log('- GET ' + this.base_url + url);
    return this.http.get(this.base_url + url)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  private remove(url: string): Observable<any> {
    console.log('- DELETE ' + this.base_url + url);
    return this.http.delete(this.base_url + url)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
