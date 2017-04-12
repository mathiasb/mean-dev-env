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

describe('EndpointComponent', () => {

  let comp: EndpointComponent;
  let fixture: ComponentFixture<EndpointComponent>;
  let de: DebugElement;
  let el: HTMLElement;

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
  });

  it ('should work', () => {
    expect(comp instanceof EndpointComponent).toBe(true, 'should create EndpointComponent');
  });

  it ('should contain an input field for an endpoint', () => {

    de = fixture.debugElement.query(By.css('.endpoint-input'));

    expect(de).not.toBeNull();

    el = de.nativeElement;

    expect(el).toBeDefined();
    expect(el.nodeName.toLowerCase()).toEqual('input');

  });
});
