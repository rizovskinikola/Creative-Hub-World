import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniUxUiInformationComponent } from './thank-you-mini-ux-ui-information.component';

describe('ThankYouMiniUxUiInformationComponent', () => {
  let component: ThankYouMiniUxUiInformationComponent;
  let fixture: ComponentFixture<ThankYouMiniUxUiInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniUxUiInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniUxUiInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
