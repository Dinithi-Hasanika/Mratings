import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-spaces',
  templateUrl: './add-spaces.component.html',
  styleUrls: ['./add-spaces.component.css']
})
export class AddSpacesComponent implements OnInit {

  constructor() { }
  spaceAdd = 1;
  spaceCards = new Array();

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

}
