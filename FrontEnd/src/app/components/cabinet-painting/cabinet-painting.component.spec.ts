import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetPaintingComponent } from './cabinet-painting.component';

describe('CabinetPaintingComponent', () => {
  let component: CabinetPaintingComponent;
  let fixture: ComponentFixture<CabinetPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetPaintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
