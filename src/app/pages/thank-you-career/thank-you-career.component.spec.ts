import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouCareerComponent } from './thank-you-career.component';

describe('ThankYouCareerComponent', () => {
  let component: ThankYouCareerComponent;
  let fixture: ComponentFixture<ThankYouCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouCareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
