import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { ConditionalsComponent } from './examples/conditionals/conditionals.component';
import { HomeComponent } from './common/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { HTTPService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './common/login/login.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ConditionalsComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularToastifyModule,
    MatButtonModule
  ],
  providers: [
    ToastService,
    HTTPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
