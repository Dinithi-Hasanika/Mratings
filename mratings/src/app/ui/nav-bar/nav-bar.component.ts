import { Component, OnInit } from '@angular/core';
import { AsgardeoAuthService, AuthStateInterface, BasicUserInfo } from "@asgardeo/auth-angular";
import { AppAuthService } from 'src/app/services/app-auth/app-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isAuthenticated = false;
  public username = "";
  public isAdmin = false;

  constructor(private auth: AsgardeoAuthService, private authService: AppAuthService) { }

  ngOnInit(): void {
    this.auth.state$.subscribe((state: AuthStateInterface) => {
      this.isAuthenticated = state.isAuthenticated;
      this.username = state.username;
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
  }

  logout(){
    console.log("lets logout!");
    this.auth.signOut();
  }
}
