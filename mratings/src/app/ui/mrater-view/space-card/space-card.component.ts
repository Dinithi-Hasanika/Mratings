import { Component, Input, OnInit } from '@angular/core';
import { Space } from 'src/app/entity/Space';
import { SpaceService } from 'src/app/services/spaces/space.service';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.css']
})
export class SpaceCardComponent implements OnInit {

  constructor(private spaceService: SpaceService) { }

@Input() space = {} as Space;
@Input() isAdmin = false;
isEdit: boolean = false;

  ngOnInit(): void {
  }

  deleteSpace(spaceId: any){
    console.log(spaceId);
    this.spaceService.deleteSpace(spaceId).subscribe(data => {
console.log(data);
    });
    location.reload();
  }

  editSpace(){
    this.isEdit = true;
    console.log(this.isEdit);
  }

  saveEditedSpace(){
    console.log(this.space);
    this.spaceService.editSpace(this.space).subscribe(data => {
      console.log(data);
      if(data){
        this.space = data;
      }
    })
    this.isEdit = false;
  }

}
