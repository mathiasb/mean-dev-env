import {
  Component,
  Input,
  OnInit } from '@angular/core';

import { User } from '../models';

@Component({
  selector: 'app-user',
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
          <a href="#">Cancel account</a>
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

  ngOnInit() {}
}
