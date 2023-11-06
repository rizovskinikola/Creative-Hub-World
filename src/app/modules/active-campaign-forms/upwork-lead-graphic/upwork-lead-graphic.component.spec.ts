import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpworkLeadGraphicComponent } from './upwork-lead-graphic.component';

describe('UpworkLeadGraphicComponent', () => {
  let component: UpworkLeadGraphicComponent;
  let fixture: ComponentFixture<UpworkLeadGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpworkLeadGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpworkLeadGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
