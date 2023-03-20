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
      }else if(!state.isLoading && !state.isAuthenticated){
          this.goLandingPage();
      }
    })

  }

  goLandingPage(){
    this.router.navigate(['']);
  }

}
