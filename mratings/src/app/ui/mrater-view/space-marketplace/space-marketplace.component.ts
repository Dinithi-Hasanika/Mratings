import { Component, Input, OnInit } from '@angular/core';
import { Space } from 'src/app/entity/Space';
import { SpaceService } from 'src/app/services/spaces/space.service';
import { User } from 'src/app/entity/User';

@Component({
  selector: 'app-space-marketplace',
  templateUrl: './space-marketplace.component.html',
  styleUrls: ['./space-marketplace.component.css']
})
export class SpaceMarketplaceComponent implements OnInit {

  constructor(private spaceService: SpaceService) { }
  public spaces: Space[] = [];
  space: Space;
  indexes: string[] = [];
  @Input() isAdmin = false;
  @Input() appUser = new User("","","","",[]) ;
  ngOnInit(): void {

    this.appUser.userSpaces.forEach(data => {
     this.indexes.push(data.id);
    })

    this.spaceService.getSpaces().subscribe(data =>{
     for(var d of data){
      this.space = d as Space;
      if(!this.indexes.includes(this.space.id)){
        this.spaces.push(d as Space);  
      }
        
     }
    })

  }

}
