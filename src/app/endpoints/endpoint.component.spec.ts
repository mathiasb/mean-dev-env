import {
  TestBed,
  ComponentFixture,
  ComponentFixtureAutoDetect,
  async
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { click } from '../testing';
import { EndpointComponent } from './endpoint.component';
import { Endpoint } from '../models';

describe('EndpointComponent', () => {

  let comp: EndpointComponent;
  let fixture: ComponentFixture<EndpointComponent>;
  let de_input: DebugElement;
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

    de_input = fixture.debugElement.query(By.css('.endpoint-input'));
    el_input = de_input.nativeElement;

    expectedEndpoint = new Endpoint('PayPal EFY453', 'payment gateway');
    comp.endpoint = expectedEndpoint;

    fixture.detectChanges(); // trigger initial data binding
  });

  it ('should work', () => {
    expect(comp instanceof EndpointComponent).toBe(true, 'should create EndpointComponent');
  });

  it ('should contain an input field for an endpoint', () => {
    expect(el_input).toBeDefined();
    expect(el_input.nodeName.toLowerCase()).toEqual('input');
  });

  it ('should change text of the input field when changing component endpoint', () => {
    let old_endpoint = comp.endpoint;
    comp.endpoint = new Endpoint('WooCommerce ABC 123', 'Point of sale');
    fixture.detectChanges();
    expect(de_input.nativeElement.textContent).toContain('WooCommerce ABC 123', 'Should not be ' + old_endpoint.name);
  });

  it ('should display "it worked" when the Edit link is clicked', () => {
    // to be defined
  });
});
