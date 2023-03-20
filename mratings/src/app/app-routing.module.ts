import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterAuthComponent } from './ui/after-auth/after-auth.component';
import { LandingComponent } from './ui/landing/landing.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "afterauth", component: AfterAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
