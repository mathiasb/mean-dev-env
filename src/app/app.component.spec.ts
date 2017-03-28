import {
  TestBed,
  ComponentFixture,
  ComponentFixtureAutoDetect,
  async
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './mainmenu.component';

describe('Zing Dashboard App Component', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, MainMenuComponent ], // declare the test component
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
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

  it ('should say Zing Dashboard in the header', () => {

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

    expect(el.textContent).toContain('Zing Dashboard');
  });

  it ('should contain a responsive main menu component', () => {

    de = fixture.debugElement.query(By.css('app-main-menu'));
    el = de.nativeElement;

    expect(de.componentInstance instanceof MainMenuComponent)
      .toBe(true, 'should contain MainMenuComponent');
  });
});
