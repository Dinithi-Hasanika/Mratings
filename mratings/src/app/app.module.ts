import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { AboutMratingsComponent } from './ui/about-mratings/about-mratings.component';
import { LoginComponent } from './ui/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMratingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
