import { Component, OnInit } from '@angular/core';
import { AsgardeoAuthService, AuthStateInterface } from "@asgardeo/auth-angular";
import { AppAuthService } from 'src/app/services/app-auth/app-auth.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private auth: AsgardeoAuthService, private userService: UserService, private authService: AppAuthService) { }

//public isAuthenticated = false;

  handleSignIn(): void {
    this.auth.signIn();
}

handbasic(): void{
  this.auth.signIn();
}

listbasic(): void{
  this.userService.getUsers().subscribe(data => {
    console.log(data);
  })
}

isAuthenticated(): boolean{
  return this.authService.isAuthenticated();
}

  ngOnInit(): void {
  }

}
