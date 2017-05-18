import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WebApiService } from './web-api.service';
import { UserListComponent } from './auth/user-list.component';
import { UserComponent } from './auth/user.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent
  ],
  providers: [
    WebApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
