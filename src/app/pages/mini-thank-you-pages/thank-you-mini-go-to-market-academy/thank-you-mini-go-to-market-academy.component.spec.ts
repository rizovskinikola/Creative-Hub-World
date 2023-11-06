import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniGoToMarketAcademyComponent } from './thank-you-mini-go-to-market-academy.component';

describe('ThankYouMiniGoToMarketAcademyComponent', () => {
  let component: ThankYouMiniGoToMarketAcademyComponent;
  let fixture: ComponentFixture<ThankYouMiniGoToMarketAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniGoToMarketAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniGoToMarketAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
