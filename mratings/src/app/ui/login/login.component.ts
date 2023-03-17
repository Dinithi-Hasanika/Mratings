import { Component, OnInit } from '@angular/core';
import { AsgardeoAuthService } from "@asgardeo/auth-angular";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private auth: AsgardeoAuthService, private userService: UserService) { }
  handleSignIn(): void {
    console.log("button clicked!");
    this.auth.signIn();
}

handbasic(): void{
  console.log("hey you!!");
  console.log("button clicked!");
  this.auth.signIn();
}

listbasic(): void{
  console.log("hey users!!");
  this.userService.getUsers().subscribe(data => {
    console.log(data);
  })
}

  ngOnInit(): void {
  }

}
