import {
  Component,
  Input,
  Output,
  EventEmitter
 } from '@angular/core';

import { Endpoint } from '../models';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.css']
})
export class EndpointComponent {
  mycolor = 'light-gray';

  @Input() endpoint: Endpoint;
  @Output() changeClicked = new EventEmitter<string>()

  onChange() {
    this.changeClicked.emit('it worked!');
  }
}
