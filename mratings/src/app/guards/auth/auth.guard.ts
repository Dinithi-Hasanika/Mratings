import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AsgardeoAuthService, AuthStateInterface } from "@asgardeo/auth-angular";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public isAuthenticated = false;
  constructor(private auth: AsgardeoAuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.auth.state$.subscribe((state: AuthStateInterface) => {
        this.isAuthenticated = state.isAuthenticated;
      })
      if (this.isAuthenticated){
    return this.isAuthenticated;
      }else{
        this.router.navigate(['']);
        return false;
        
      }
  }
  
}
