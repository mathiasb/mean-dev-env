import { Component } from '@angular/core';

import { Endpoint } from './models';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fred&Matt Backstage';

  firstEndpoint: Endpoint = new Endpoint('Tictail XZY 123', 'Point of sale');
}
