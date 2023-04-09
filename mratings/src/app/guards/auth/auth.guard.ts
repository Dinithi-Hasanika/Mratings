import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, skipUntil } from 'rxjs';
import { AsgardeoAuthService, AuthStateInterface, BasicUserInfo } from "@asgardeo/auth-angular";
import { Router } from '@angular/router';
import { AppAuthService } from 'src/app/services/app-auth/app-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public isAuthenticated = false;
  constructor(private auth: AsgardeoAuthService, private router: Router, private authService: AppAuthService) { }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //     this.auth.state$.subscribe((state: AuthStateInterface) => {
  //       this.isAuthenticated = state.isAuthenticated;
  //     })
  //     if (this.isAuthenticated){
  //   return this.isAuthenticated;
  //     }else{
  //       this.router.navigate(['']);
  //       return false; 
  //     }
  // }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
   while(!this.isAuthenticated){
    this.isAuthenticated = this.authService.isAuthenticated();
    if(this.isAuthenticated){
      return this.authService.isAdminUser();
    }
   }
return false;
  }
}
