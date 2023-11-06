import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouWheelComponent } from './thank-you-wheel.component';

describe('ThankYouWheelComponent', () => {
  let component: ThankYouWheelComponent;
  let fixture: ComponentFixture<ThankYouWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouWheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
