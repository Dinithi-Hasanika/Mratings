import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AddSpaceCardComponent } from '../add-space-card/add-space-card.component';
import { SpaceService } from 'src/app/services/spaces/space.service';
import { Space } from 'src/app/entity/Space';

@Component({
  selector: 'app-add-spaces',
  templateUrl: './add-spaces.component.html',
  styleUrls: ['./add-spaces.component.css']
})
export class AddSpacesComponent implements OnInit {

  constructor(private spaceService: SpaceService) { }
  spaceAdd = 1;
  spaceCards = new Array();
  public spaces: Space[] = [];

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

  removeAllCards(){
    console.log(this.spaceCards);
    this.spaceCards.splice(0);
    this.spaceAdd = 0;
    this.spaces.splice(0);
    console.log(this.spaceCards);
  }

  getValue(){
   this.children.forEach(child => this.spaces.push(child.space));
   this.spaceService.addSpaces(this.spaces).subscribe(data => {
    console.log(data);
    if (data) {
      console.log("success");
      this.removeAllCards();
    }

   });
  }

}
