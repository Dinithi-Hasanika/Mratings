import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceMarketplaceComponent } from './space-marketplace.component';

describe('SpaceMarketplaceComponent', () => {
  let component: SpaceMarketplaceComponent;
  let fixture: ComponentFixture<SpaceMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
