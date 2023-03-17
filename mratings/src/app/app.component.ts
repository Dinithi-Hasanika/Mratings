import { Component } from '@angular/core';
import { AsgardeoAuthService } from "@asgardeo/auth-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mratings'; 
  constructor(private auth: AsgardeoAuthService) { }
  handleSignIn(): void {
    this.auth.signIn();
}

// Use this function in a logout button to simply sign-out.
handleSignOut(): void {
    this.auth.signOut();
}
}
