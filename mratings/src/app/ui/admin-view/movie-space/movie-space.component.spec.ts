import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSpaceComponent } from './movie-space.component';

describe('MovieSpaceComponent', () => {
  let component: MovieSpaceComponent;
  let fixture: ComponentFixture<MovieSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
