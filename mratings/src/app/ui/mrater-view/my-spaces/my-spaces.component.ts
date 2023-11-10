import { Component, Input, OnInit } from '@angular/core';
import { Space } from 'src/app/entity/Space';
import { User } from 'src/app/entity/User';

@Component({
  selector: 'app-my-spaces',
  templateUrl: './my-spaces.component.html',
  styleUrls: ['./my-spaces.component.css']
})
export class MySpacesComponent implements OnInit {

  constructor() { }
  public spaces: Space[] = [];
  @Input() appUser = new User("","","","",[]) ;

  ngOnInit(): void {
    this.spaces = this.appUser.userSpaces;
    console.log(this.appUser.userSpaces);
  }

}
