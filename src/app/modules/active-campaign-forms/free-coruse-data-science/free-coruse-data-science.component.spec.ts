import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCoruseDataScienceComponent } from './free-coruse-data-science.component';

describe('FreeCoruseDataScienceComponent', () => {
  let component: FreeCoruseDataScienceComponent;
  let fixture: ComponentFixture<FreeCoruseDataScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCoruseDataScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCoruseDataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
