import { Component, Input, OnInit } from '@angular/core';
import { Space } from 'src/app/entity/Space';
import { SpaceService } from 'src/app/services/spaces/space.service';
import { User } from 'src/app/entity/User';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.css']
})
export class SpaceCardComponent implements OnInit {

  constructor(private spaceService: SpaceService, private userService: UserService) { }

@Input() space = {} as Space;
@Input() isAdmin = false;
@Input() appUser = new User("","","","",[]) ;
isEdit: boolean = false;
userSpaces: Space[];

  ngOnInit(): void {
  }

  deleteSpace(spaceId: any){
    console.log(spaceId);
    this.spaceService.deleteSpace(spaceId).subscribe(data => {
console.log(data);
    });
    location.reload();
  }

  editSpace(){
    this.isEdit = true;
    console.log(this.isEdit);
  }

  saveEditedSpace(){
    console.log(this.space);
    this.spaceService.editSpace(this.space).subscribe(data => {
      console.log(data);
      if(data){
        this.space = data;
      }
    })
    this.isEdit = false;
  }

  subscribeToSpace(){
   this.addSpacetoUser();
   this.increaseSpaceSubscribers();
  }

  increaseSpaceSubscribers() {
    this.space.followers = this.space.followers + 1;
    this.spaceService.editSpace(this.space).subscribe(data => {
     console.log("space "+data);
     if(data){
       this.space = data;
     }
   });
  }

  addSpacetoUser(){
    console.log("im in");
if(!this.appUser.userSpaces.includes(this.space)){
  this.appUser.userSpaces.push(this.space);
}
console.log(this.appUser);
this.userService.addUser(this.appUser).subscribe(data => {
  console.log(data);
});
  }
}
