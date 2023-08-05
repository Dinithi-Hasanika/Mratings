import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MraterSpacesComponent } from './mrater-spaces.component';

describe('MraterSpacesComponent', () => {
  let component: MraterSpacesComponent;
  let fixture: ComponentFixture<MraterSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MraterSpacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MraterSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
