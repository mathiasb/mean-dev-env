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
import { MainMenuComponent } from './mainmenu.component';

import {
  EndpointInputComponent,
  EndpointListComponent,
  EndpointComponent,
  EndpointService
} from './endpoints';

describe('Zing Dashboard App Component', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        MainMenuComponent,
        EndpointComponent,
        EndpointInputComponent,
        EndpointListComponent
      ], // declare the test component
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        EndpointService
      ]
    }).compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it ('should work', () => {
    expect(comp instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it ('should say Fred&Matt Backstage in the header', () => {
    de = fixture.debugElement.query(By.css('h1'));
    expect(de).not.toBeNull();
    el = de.nativeElement;
    expect(el.textContent).toContain('Fred&Matt Backstage');
  });

  it ('should contain a responsive main menu component', () => {
    de = fixture.debugElement.query(By.css('app-main-menu'));
    expect(de).not.toBeNull();
    el = de.nativeElement;
    expect(de.componentInstance instanceof MainMenuComponent)
      .toBe(true, 'should contain MainMenuComponent');
  });

  it ('should contain an endpoint input component', () => {
    de = fixture.debugElement.query(By.css('endpoint-input'));
    expect(de).not.toBeNull();
    el = de.nativeElement;
    expect(de.componentInstance instanceof EndpointInputComponent)
      .toBe(true, 'should contain EndpointInputComponent');
  });

  it ('should contain an endpoint list component that is empty', () => {
    de = fixture.debugElement.query(By.css('endpoint-list'));
    expect(de).not.toBeNull();
    el = de.nativeElement;
    expect(de.componentInstance instanceof EndpointListComponent)
      .toBe(true, 'should contain EndpointListComponent');
  });

  it ('should update the endpoint list when clicking save button with data in the input fields', () => {

  });
});
