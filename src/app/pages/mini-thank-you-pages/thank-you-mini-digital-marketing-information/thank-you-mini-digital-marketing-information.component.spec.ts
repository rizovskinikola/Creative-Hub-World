import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniDigitalMarketingInformationComponent } from './thank-you-mini-digital-marketing-information.component';

describe('ThankYouMiniDigitalMarketingInformationComponent', () => {
  let component: ThankYouMiniDigitalMarketingInformationComponent;
  let fixture: ComponentFixture<ThankYouMiniDigitalMarketingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniDigitalMarketingInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniDigitalMarketingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
