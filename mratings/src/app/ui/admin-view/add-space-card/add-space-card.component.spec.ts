import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpaceCardComponent } from './add-space-card.component';

describe('AddSpaceCardComponent', () => {
  let component: AddSpaceCardComponent;
  let fixture: ComponentFixture<AddSpaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpaceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
