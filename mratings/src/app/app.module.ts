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
import { AdminHomeComponent } from './ui/admin-view/admin-home/admin-home.component';
import { MraterHomeComponent } from './ui/mrater-view/mrater-home/mrater-home.component';
import { ControlPanelComponent } from './ui/admin-view/control-panel/control-panel/control-panel.component';
import { MovieSpaceComponent } from './ui/admin-view/movie-space/movie-space.component';
import { MoviesComponent } from './ui/admin-view/movies/movies.component';
import { UsersComponent } from './ui/admin-view/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMratingsComponent,
    LoginComponent,
    LandingComponent,
    AfterAuthComponent,
    AdminHomeComponent,
    MraterHomeComponent,
    ControlPanelComponent,
    MovieSpaceComponent,
    MoviesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsgardeoAuthModule.forRoot({
      signInRedirectURL: "http://localhost:4200/afterauth",
      clientID: "R56Di7i2RydW4h4XzYkCp3fGpVAa",
      baseUrl: "https://api.asgardeo.io/t/mratings",
      scope: ['openid', 'profile', 'groups']
  }),
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
