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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './common/login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationService } from './services/auth/authorization.service';
import { ErrorInterceptor } from './services/interceptors/error.interceptor';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from "ng-recaptcha";

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
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RecaptchaV3Module
  ],
  providers: [
    ToastService,
    HTTPService,
    AuthorizationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
