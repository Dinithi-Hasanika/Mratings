import { Component, OnInit } from '@angular/core';
import { AsgardeoAuthService } from "@asgardeo/auth-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private auth: AsgardeoAuthService) { }
  handleSignIn(): void {
    console.log("button clicked!");
    this.auth.signIn();
}

handbasic(): void{
  console.log("hey you!!");
  console.log("button clicked!");
  this.auth.signIn();
}

  ngOnInit(): void {
  }

}
