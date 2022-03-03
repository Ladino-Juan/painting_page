import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorPaintingComponent } from './exterior-painting.component';

describe('ExteriorPaintingComponent', () => {
  let component: ExteriorPaintingComponent;
  let fixture: ComponentFixture<ExteriorPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExteriorPaintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
