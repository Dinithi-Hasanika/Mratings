import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-space',
  templateUrl: './movie-space.component.html',
  styleUrls: ['./movie-space.component.css']
})
export class MovieSpaceComponent implements OnInit {
public isAdmin= true;
  constructor() { }

  ngOnInit(): void {
  }

}
