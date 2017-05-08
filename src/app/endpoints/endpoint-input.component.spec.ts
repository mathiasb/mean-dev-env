import {
  TestBed,
  ComponentFixture,
  ComponentFixtureAutoDetect,
  async
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  click,
  TestData
} from '../testing';

import { EndpointInputComponent } from './endpoint-input.component';
import { Endpoint } from '../models';

describe('Endpoint Input Component', () => {

  let comp: EndpointInputComponent;
  let fixture: ComponentFixture<EndpointInputComponent>;
  let name_de: DebugElement;
  let type_de: DebugElement;
  let baseurl_de: DebugElement;
  let client_id_de: DebugElement;
  let client_secret_de: DebugElement;
  let save_btn_de: DebugElement;

  let el: HTMLElement;
  let expectedEndpoint: Endpoint;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EndpointInputComponent ], // declare the test component
      providers: [
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointInputComponent);
    comp = fixture.componentInstance;

    name_de = fixture.debugElement.query(By.css('#endpointName'));
    type_de = fixture.debugElement.query(By.css('#endpointType'));
    baseurl_de = fixture.debugElement.query(By.css('#endpointBaseUrl'));
    client_id_de = fixture.debugElement.query(By.css('#endpointClientId'));
    client_secret_de = fixture.debugElement.query(By.css('#endpointClientSecret'));
    save_btn_de = fixture.debugElement.query(By.css('#saveBtn'));


    // Pretend that we have an Endpoint that we are entering
    expectedEndpoint = new Endpoint(
      TestData.endpoints[1].name,
      TestData.endpoints[1].type,
      TestData.endpoints[1].baseUrl,
      TestData.endpoints[1].client_id,
      TestData.endpoints[1].client_secret
    );

    // trigger initial data binding
    fixture.detectChanges();
  });

  it ('should work', () => {
    expect(comp instanceof EndpointInputComponent).toBe(true, 'should create EndpointInputComponent');
  });

  it ('should contain an input field for an endpoint name, type, baseurl, client_id and client_secret', () => {
    expect(name_de.nativeElement).toBeDefined('name input field exists');
    expect(type_de.nativeElement).toBeDefined('type input field exists');
    expect(baseurl_de.nativeElement).toBeDefined('baseUrl input field exists');
    expect(client_id_de.nativeElement).toBeDefined('client_id_de input field exists');
    expect(client_secret_de.nativeElement).toBeDefined('client_secret input field exists');
    expect(save_btn_de.nativeElement).toBeDefined('saveBtn button exists');
  });

  it ('should contain the data from the example Endpoint', () => {
    const expectedName = expectedEndpoint.name;
    expect(name_de.nativeElement.textContent).toContain(expectedName);
  });

  it ('should change text of the input field when changing component endpoint', () => {
/*    let old_endpoint = comp.endpoint;
    comp.endpoint = new Endpoint('WooCommerce ABC 123', 'Point of sale');
    fixture.detectChanges();
    expect(de_input.nativeElement.textContent).toContain('WooCommerce ABC 123', 'Should not be ' + old_endpoint.name);*/
  });
});
