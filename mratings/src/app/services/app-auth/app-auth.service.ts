import { Injectable } from '@angular/core';
import { AsgardeoAuthService, AuthStateInterface, BasicUserInfo } from "@asgardeo/auth-angular";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  public isAuth = false;
  public isAdmin = false;
  
  constructor(private auth: AsgardeoAuthService, private router: Router) { }

  public isAuthenticated(): boolean{
    this.auth.state$.subscribe((state: AuthStateInterface) => {
         if(!state.isLoading){
          this.isAuth = state.isAuthenticated;
         }
        })
    return this.isAuth;
  }

  public isAdminUser(): boolean{

    this.auth.state$.subscribe((state: AuthStateInterface) => {
      console.log(state);
      if(!state.isLoading && state.isAuthenticated){
          this.auth
          .getBasicUserInfo()
          .then((user: BasicUserInfo) => {
            if(user['groups']){
            if(user['groups'].includes('Admin')){
             this.isAdmin = true;
            }
            }
          });
      }
    })

    return this.isAdmin;
  }
 
  public isRedirection():boolean{
    this.auth.state$.subscribe((state: AuthStateInterface) => {
    
      if(!state.isLoading && !state.isAuthenticated){
        this.router.navigate(["mratings"]);
        return false;
      }else{
        return true;
      }
    });
    return true;
  }
  
}
