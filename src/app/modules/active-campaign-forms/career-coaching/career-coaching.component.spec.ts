import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCoachingComponent } from './career-coaching.component';

describe('CareerCoachingComponent', () => {
  let component: CareerCoachingComponent;
  let fixture: ComponentFixture<CareerCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerCoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
