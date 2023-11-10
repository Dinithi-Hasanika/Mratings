import { Component, OnInit } from '@angular/core';
import { AsgardeoAuthService, AuthStateInterface, BasicUserInfo } from "@asgardeo/auth-angular";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/entity/User';

@Component({
  selector: 'app-after-auth',
  templateUrl: './after-auth.component.html',
  styleUrls: ['./after-auth.component.css']
})
export class AfterAuthComponent implements OnInit {

 public spaceUser = new User("","","","",[]);
 public userId = "";

  constructor(private auth: AsgardeoAuthService, private router: Router, private userService: UserService,) { }

 

  ngOnInit(): void {
    console.log("Auth checking started!");
    this.auth.state$.subscribe((state: AuthStateInterface) => {
      console.log(state);
      if(!state.isLoading && state.isAuthenticated){
          console.log("inside");
          this.auth
          .getBasicUserInfo()
          .then((user: BasicUserInfo) => {
          this.userId = user.sub as string;
          this.userService.getUser(this.userId).subscribe(data => {
            if(data){
              this.spaceUser = data;
              this.updateExistingUser(user);
            }else {
              this.addNewUser(user);
            }
          });
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

  updateExistingUser(user: BasicUserInfo){
    var isChanged = false;
    if(user['givenName'] !== this.spaceUser.firstName){
      isChanged = true;
      this.spaceUser.firstName = user['givenName'];
    }
    if(user['familyName'] !== this.spaceUser.lastName){
      isChanged = true;
      this.spaceUser.lastName = user['familyName'];
    }
    if(isChanged === true){
      this.userService.addUser(this.spaceUser).subscribe(data => {});
    }
  }

  addNewUser(user: BasicUserInfo){
    this.spaceUser.id = user.sub as string;
    this.spaceUser.userName = user.username as string;
    this.spaceUser.firstName = user['givenName'];
    this.spaceUser.lastName = user['familyName'];
    this.userService.addUser(this.spaceUser).subscribe(data => {});
  }


  goLandingPage(){
    this.router.navigate(['']);
  }

  goAdminView(){
    this.router.navigate(['admin/home']);
  }

  goMraterView(){
    this.router.navigate(['mrater/home',this.userId]);
  }

}
