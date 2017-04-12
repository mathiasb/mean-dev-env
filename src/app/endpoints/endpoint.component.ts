import { Component, Input } from '@angular/core';

import { Endpoint } from '../models/endpoint.model';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.css']
})
export class EndpointComponent {
  @Input() endpoint: Endpoint;
}
