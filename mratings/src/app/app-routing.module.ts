import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './ui/admin-view/admin-home/admin-home.component';
import { AfterAuthComponent } from './ui/after-auth/after-auth.component';
import { LandingComponent } from './ui/landing/landing.component';
import { MraterHomeComponent } from './ui/mrater-view/mrater-home/mrater-home.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "afterauth", component: AfterAuthComponent },
  {path: "admin/home", component:AdminHomeComponent},
  {path: "mrater/home", component: MraterHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
