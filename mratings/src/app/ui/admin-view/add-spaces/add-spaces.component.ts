import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AddSpaceCardComponent } from '../add-space-card/add-space-card.component';
import { SpaceService } from 'src/app/services/spaces/space.service';
import { Space } from 'src/app/entity/Space';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-add-spaces',
  templateUrl: './add-spaces.component.html',
  styleUrls: ['./add-spaces.component.css']
})
export class AddSpacesComponent implements OnInit {

  constructor(private spaceService: SpaceService,private userService: UserService) { }
  spaceAdd = 1;
  spaceCards = new Array();
  public spaces: Space[] = [];

  public  new_user = {
    "id": "",
    "userName": "",
    "firstName": "",
    "lastName": ""
 };

  @ViewChildren(AddSpaceCardComponent) children: QueryList<AddSpaceCardComponent>;

  ngOnInit(): void {
   this.spaceCards.push(1);
  }

  addSpaceCard(){
    this.spaceAdd = this.spaceAdd + 1;
    this.spaceCards.push(this.spaceAdd);
    console.log(this.spaceCards);
  }

  remooveSpaceCard(cardindex: any){
    console.log(cardindex);
    const index =  this.spaceCards.indexOf(cardindex);
    if(index !== -1){
      this.spaceCards.splice(index,1);
    }
    console.log(this.spaceCards);
  }

  getValue(){
    this.children.forEach(child => this.spaces.push(child.space));
   this.spaceService.addSpaces(this.spaces).subscribe(data => {});
   //this.spaceService.getSpaces().subscribe();
  }

}
