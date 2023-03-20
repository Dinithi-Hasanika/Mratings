import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { AboutMratingsComponent } from './ui/about-mratings/about-mratings.component';
import { LoginComponent } from './ui/login/login.component';
import { AsgardeoAuthModule } from "@asgardeo/auth-angular";
import { LandingComponent } from './ui/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { AfterAuthComponent } from './ui/after-auth/after-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMratingsComponent,
    LoginComponent,
    LandingComponent,
    AfterAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsgardeoAuthModule.forRoot({
      signInRedirectURL: "http://localhost:4201/afterauth",
      clientID: "R56Di7i2RydW4h4XzYkCp3fGpVAa",
      baseUrl: "https://api.asgardeo.io/t/mratings",
      scope: ['openid', 'profile']
  }),
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
