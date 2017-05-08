import { Component } from '@angular/core';

import { Endpoint } from '../models';
import { EndpointService } from './endpoint.service';

@Component({
  selector: 'endpoint-input',
  templateUrl: './endpoint-input.component.html',
  styleUrls: ['./endpoint-input.component.css'],
  providers: [EndpointService]
})
export class EndpointInputComponent {
  constructor(private endpointService: EndpointService) {}

//  endpoint: Endpoint = new Endpoint('', '');

  onSave(name: string, type: string, baseUrl: string, clientId: string, clientSecret: string) {
    const ep = new Endpoint(name,type,baseUrl,clientId,clientSecret);
    this.endpointService.addEndpoint(ep);
  }
}
