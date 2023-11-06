import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-mrater-spaces',
  templateUrl: './mrater-spaces.component.html',
  styleUrls: ['./mrater-spaces.component.css']
})
export class MraterSpacesComponent implements OnInit {
  public isAdmin = false;
  constructor() { }

  ngOnInit(): void {
  }

}
