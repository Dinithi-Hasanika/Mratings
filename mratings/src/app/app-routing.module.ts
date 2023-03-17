import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMratingsComponent } from './ui/about-mratings/about-mratings.component';
import { LandingComponent } from './ui/landing/landing.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "afterauth", component: AboutMratingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
