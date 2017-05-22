import {
  Component,
  Input,
  OnInit } from '@angular/core';

import { User } from '../models';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-user',
  providers:[WebApiService],
  template: `
    <article class="panel panel-default">
      <div class="panel-body">
        {{ user.firstName + ' ' + user.lastName }}
      </div>
      <footer class="panel-footer">
        <div class="status">
          {{ user.email }}
        </div>
        <div class="config">
          <a href="#" (click)="onChange()">Reset password</a>
          <a href="#" (click)="removeUser()">Cancel account</a>
        </div>
      </footer>
    </article>
  `,
  styles: [`
    .status {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
    }
    `,`
    .config {
      display: inline-block;;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }`
  ]
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private web_api: WebApiService) {}

  ngOnInit() {}

  removeUser() {
    this.web_api.deleteUser(this.user);
  }
}
