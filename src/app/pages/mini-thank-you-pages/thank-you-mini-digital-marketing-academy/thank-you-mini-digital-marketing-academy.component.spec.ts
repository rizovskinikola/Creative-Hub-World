import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniDigitalMarketingAcademyComponent } from './thank-you-mini-digital-marketing-academy.component';

describe('ThankYouMiniDigitalMarketingAcademyComponent', () => {
  let component: ThankYouMiniDigitalMarketingAcademyComponent;
  let fixture: ComponentFixture<ThankYouMiniDigitalMarketingAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniDigitalMarketingAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniDigitalMarketingAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
