import { Component, OnInit } from '@angular/core';
import { AsgardeoAuthService, AuthStateInterface, BasicUserInfo } from "@asgardeo/auth-angular";
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/entity/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mrater-home',
  templateUrl: './mrater-home.component.html',
  styleUrls: ['./mrater-home.component.css']
})
export class MraterHomeComponent implements OnInit {
  public activeButton = 'movie_spaces';
  public userId = "";
  public appUser = new User("","","","",[]);

  constructor( private auth: AsgardeoAuthService, private userService: UserService, private route: ActivatedRoute) { }

   ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    this.userId = routeParams.get('userId') as string;  
    this.getAppUser();      
  }

  getAppUser(){
this.userService.getUser(this.userId).subscribe(data => {
  if(data != null){
console.log(data);
this.appUser = data;
console.log(this.appUser);
  }
});
  }

  getActiveButton(): string {
    return this.activeButton;
  }

  setActiveButton(buttonName: string ): void {
   this.activeButton = buttonName;
  }
}
