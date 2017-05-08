import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  EndpointInputComponent,
  EndpointListComponent,
  EndpointComponent,
  EndpointService
} from './endpoints';
import { MainMenuComponent } from './mainmenu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EndpointComponent,
    EndpointInputComponent,
    EndpointListComponent,
    MainMenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
