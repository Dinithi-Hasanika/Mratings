import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mrater-home',
  templateUrl: './mrater-home.component.html',
  styleUrls: ['./mrater-home.component.css']
})
export class MraterHomeComponent implements OnInit {
  public activeButton = 'movie_spaces';
  constructor() { }

  ngOnInit(): void {
  }

  getActiveButton(): string {
    return this.activeButton;
  }

  setActiveButton(buttonName: string ): void {
   this.activeButton = buttonName;
  }
}
