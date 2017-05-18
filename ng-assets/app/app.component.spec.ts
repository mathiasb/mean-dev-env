import {
  TestBed,
  ComponentFixture,
  ComponentFixtureAutoDetect,
  async
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

describe('Zing App Component', () => {

  // Configuration that can handle some async components
  beforeEach(async(() => {
    TestBed.configureTestingModule({

    }).compileComponents();
  }));

  it('should start', () => {
  });
});
