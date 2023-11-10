import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/entity/User';

@Component({
  selector: 'app-mrater-spaces',
  templateUrl: './mrater-spaces.component.html',
  styleUrls: ['./mrater-spaces.component.css']
})
export class MraterSpacesComponent implements OnInit {
  public isAdmin = false;
 @Input() appUser = new User("","","","",[]) ;

  constructor() { }

  ngOnInit(): void {
  }

}
