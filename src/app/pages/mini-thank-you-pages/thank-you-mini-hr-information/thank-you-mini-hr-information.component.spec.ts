import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniHrInformationComponent } from './thank-you-mini-hr-information.component';

describe('ThankYouMiniHrInformationComponent', () => {
  let component: ThankYouMiniHrInformationComponent;
  let fixture: ComponentFixture<ThankYouMiniHrInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniHrInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniHrInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
