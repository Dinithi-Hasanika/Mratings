import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
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
