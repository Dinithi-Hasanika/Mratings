import { Component, OnInit } from '@angular/core';
import { AsgardeoAuthService, AuthStateInterface, BasicUserInfo } from "@asgardeo/auth-angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-auth',
  templateUrl: './after-auth.component.html',
  styleUrls: ['./after-auth.component.css']
})
export class AfterAuthComponent implements OnInit {

  constructor(private auth: AsgardeoAuthService, private router: Router) { }

  ngOnInit(): void {
    console.log("Auth checking started!");
    this.auth.state$.subscribe((state: AuthStateInterface) => {
      console.log(state);
      if(!state.isLoading && state.isAuthenticated){
          console.log("inside");
          this.auth
          .getBasicUserInfo()
          .then((user: BasicUserInfo) => {
            if(user['groups']){
            if(user['groups'].includes('Admin')){
              this.goAdminView();
            }else{
              this.goMraterView();
            }
            }else{
              this.goMraterView();
            }
          });
      }else if(!state.isLoading && !state.isAuthenticated){
          this.goLandingPage();
      }
    })

  }

  goLandingPage(){
    this.router.navigate(['']);
  }

  goAdminView(){
    this.router.navigate(['admin/home']);
  }

  goMraterView(){
    this.router.navigate(['mrater/home']);
  }

}
