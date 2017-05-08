import { Endpoint } from '../models';

export class EndpointService {

  constructor() {
    console.log("I am an endpoint service: " + this);
  }

  private endpoints: Endpoint[] = [
    new Endpoint('Tictail XZY 123', 'Point of sale'),
    new Endpoint('Paypal ABC 567', 'Payment processor')
  ];

  addEndpoint(endpoint: Endpoint) {
    this.endpoints.push(endpoint);
    console.log(this.endpoints);
  }

  getEndpoints() {
    return this.endpoints;
  }

  deleteEndpoint(endpoint: Endpoint) {
    this.endpoints.splice(this.endpoints.indexOf(endpoint), 1);
  }
}
