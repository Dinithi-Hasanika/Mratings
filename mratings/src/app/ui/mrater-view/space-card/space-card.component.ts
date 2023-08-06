import { Component, Input, OnInit } from '@angular/core';
import { Space } from 'src/app/entity/Space';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.css']
})
export class SpaceCardComponent implements OnInit {

  constructor() { }

@Input() space = {} as Space;
@Input() isAdmin = false;

  ngOnInit(): void {
  }

}
