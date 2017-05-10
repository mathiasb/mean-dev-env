import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './mainmenu.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
