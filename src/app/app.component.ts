import { Component } from '@angular/core';

import { EndpointService } from './endpoints/endpoint.service';

// import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EndpointService]
})
export class AppComponent {
  title = 'Fred&Matt Backstage';
  constructor(private endpointService: EndpointService) {}
}
