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
@Input() isMySpace = false;

isEdit: boolean = false;
userSpaces: Space[];

  ngOnInit(): void {
  }

  deleteSpace(spaceId: any){
    console.log(spaceId);
    this.spaceService.deleteSpace(spaceId).subscribe(data => {});
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
   this.updateUserSpaces("subscribe");
   this.updateSpaceSubscribers("subscribe");
  }

  unsubscribeSpace(){
    this.updateUserSpaces("unsubscribe");
    this.updateSpaceSubscribers("unsubscribe");
  }

  updateSpaceSubscribers(option: string) {
    if(option === "subscribe"){
      this.space.followers = this.space.followers + 1;
    }else if(option === "unsubscribe"){
      this.space.followers = this.space.followers - 1;
    }
    console.log(this.space.followers);
    this.spaceService.editSpace(this.space).subscribe(data => {
     console.log("space "+data);
     if(data){
       this.space = data;
     }
   });
  }

  updateUserSpaces(option: string){
    if(option === "subscribe"){
      if(!this.appUser.userSpaces.includes(this.space)){
        this.appUser.userSpaces.push(this.space);
      }
      console.log(this.appUser);
    } else if(option === "unsubscribe"){
      if(this.appUser.userSpaces.includes(this.space)){
        var index = this.appUser.userSpaces.indexOf(this.space);
        if(index != -1){
          this.appUser.userSpaces.splice(index,1);
        }
      }
      console.log(this.appUser);
    }
    this.userService.addUser(this.appUser).subscribe(data => {
      console.log(data);
    });
  }
}
