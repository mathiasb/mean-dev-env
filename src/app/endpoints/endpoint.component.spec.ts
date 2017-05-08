import {
  TestBed,
  ComponentFixture,
  ComponentFixtureAutoDetect,
  async
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EndpointComponent } from './endpoint.component';
import { Endpoint } from '../models';

import {
  click,
  TestData
} from '../testing';

describe('EndpointComponent', () => {

  let comp: EndpointComponent;
  let fixture: ComponentFixture<EndpointComponent>;
  let body_de: DebugElement;
  let status_de: DebugElement;
  let config_de: DebugElement;

  let el_input: HTMLElement;
  let expectedEndpoint: Endpoint;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EndpointComponent ], // declare the test component
      providers: [
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointComponent);
    comp = fixture.componentInstance;

    body_de = fixture.debugElement.query(By.css('.body'));
    status_de = fixture.debugElement.query(By.css('.status'));
    config_de = fixture.debugElement.query(By.css('.config'));

    expectedEndpoint = new Endpoint(
      TestData.endpoints[2].name,
      TestData.endpoints[2].type,
      TestData.endpoints[2].baseUrl,
      TestData.endpoints[2].client_id,
      TestData.endpoints[2].client_secret
    );
    comp.endpoint = expectedEndpoint;

    fixture.detectChanges(); // trigger initial data binding
  });

  it ('should work', () => {
    expect(comp instanceof EndpointComponent).toBe(true, 'should create EndpointComponent');
  });

  it ('should contain the data from the example Endpoint', () => {
    const expectedName = expectedEndpoint.name;
    expect(body_de.nativeElement.textContent).toContain(expectedName);
  });

  it ('should display "it worked" when the Edit link is clicked', () => {
    // to be defined
  });
});
