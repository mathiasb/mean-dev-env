import { Component, OnInit } from '@angular/core';

import { WebApiService } from '../web-api.service';
import { User } from '../models';

@Component({
  selector: 'user-list',
  providers: [
    WebApiService
  ],
  template: `
    <div class="col-md-8 col-md-offset-2">
      <app-user *ngFor="let user of users"
        [user]="user">
      </app-user>
    </div>
  `
})
export class UserListComponent implements OnInit {
  private users: User[] = [];

  constructor(private webapi: WebApiService) {
  }

  ngOnInit() {
    this.webapi.getUsers(this.users);
  }
}
