import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MraterHomeComponent } from './mrater-home.component';

describe('MraterHomeComponent', () => {
  let component: MraterHomeComponent;
  let fixture: ComponentFixture<MraterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MraterHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MraterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
