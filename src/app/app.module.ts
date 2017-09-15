import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routing} from './app.routing';
import {AuthenticateUserService} from './services/authenticate-user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule
  ],
  providers: [AuthenticateUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
