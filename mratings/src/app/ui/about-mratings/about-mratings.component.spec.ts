import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMratingsComponent } from './about-mratings.component';

describe('AboutMratingsComponent', () => {
  let component: AboutMratingsComponent;
  let fixture: ComponentFixture<AboutMratingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMratingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
