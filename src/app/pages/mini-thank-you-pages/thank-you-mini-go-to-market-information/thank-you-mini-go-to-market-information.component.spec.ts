import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniGoToMarketInformationComponent } from './thank-you-mini-go-to-market-information.component';

describe('ThankYouMiniGoToMarketInformationComponent', () => {
  let component: ThankYouMiniGoToMarketInformationComponent;
  let fixture: ComponentFixture<ThankYouMiniGoToMarketInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniGoToMarketInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniGoToMarketInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
