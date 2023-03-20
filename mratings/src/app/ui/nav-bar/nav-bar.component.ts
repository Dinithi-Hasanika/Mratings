import { Component, OnInit } from '@angular/core';
import { AsgardeoAuthService, AuthStateInterface } from "@asgardeo/auth-angular";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isAuthenticated = false;

  constructor(private auth: AsgardeoAuthService) { }

  ngOnInit(): void {
    this.auth.state$.subscribe((state: AuthStateInterface) => {
      this.isAuthenticated = state.isAuthenticated;
    })
  }

  logout(){
    console.log("lets logout!");
    this.auth.signOut();
  }
}
