import { Component, OnInit } from '@angular/core';
import { Space } from 'src/app/entity/Space';
import { SpaceService } from 'src/app/services/spaces/space.service';



@Component({
  selector: 'app-space-marketplace',
  templateUrl: './space-marketplace.component.html',
  styleUrls: ['./space-marketplace.component.css']
})
export class SpaceMarketplaceComponent implements OnInit {

  constructor(private spaceService: SpaceService) { }
  public spaces: Space[] = [];

  ngOnInit(): void {

    this.spaceService.getSpaces().subscribe(data =>{
     for(var d of data){
      this.spaces.push(d as Space)
     }
    })

  }

}
