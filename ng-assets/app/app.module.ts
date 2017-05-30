import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TrackJsErrorHandler } from './trackjs.handler';
import { AppComponent } from './app.component';
import { WebApiService } from './web-api.service';
import { UserListComponent } from './auth/user-list.component';
import { UserComponent } from './auth/user.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent
  ],
  providers: [
    WebApiService,
    { provide: ErrorHandler, useClass: TrackJsErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
