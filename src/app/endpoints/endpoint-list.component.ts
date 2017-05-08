import {
  Component,
  OnInit
} from '@angular/core';

import { Endpoint } from '../models';
import { EndpointService } from './endpoint.service';

@Component({
  selector: 'endpoint-list',
  template:`
    <div class="col-md-8 col-md-offset-2">
      <app-endpoint *ngFor="let ep of endpoints"
        [endpoint]="ep"
        (changeClicked)="ep.name = $event">
      </app-endpoint>
    </div>
  `,
  providers: [EndpointService]
})
export class EndpointListComponent implements OnInit {
  endpoints: Endpoint[];

  constructor(private endpointService: EndpointService) {}

  ngOnInit() {
    this.endpoints = this.endpointService.getEndpoints();
    console.log('got a service baby!');
  }
}
