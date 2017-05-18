import { Component, OnInit } from '@angular/core';

import { WebApiService } from './web-api.service';

@Component({
  selector: 'backstage-app',
  providers:[
    WebApiService
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
