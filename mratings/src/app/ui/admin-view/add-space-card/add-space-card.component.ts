import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Space } from 'src/app/entity/Space';

@Component({
  selector: 'app-add-space-card',
  templateUrl: './add-space-card.component.html',
  styleUrls: ['./add-space-card.component.css']
})
export class AddSpaceCardComponent implements OnInit {

  space = new Space("","","","",0,0);

  constructor() { }

  ngOnInit(): void {
  }

}
