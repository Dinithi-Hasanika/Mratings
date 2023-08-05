import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.css']
})
export class SpaceCardComponent implements OnInit {

  constructor() { }

@Input() spaceName= '';
@Input() description= '';
@Input() country= '';
@Input() movies= 0;
@Input() subscribers= 0;

  ngOnInit(): void {
  }

}
