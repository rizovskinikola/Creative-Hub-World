import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniCodeInformationComponent } from './thank-you-mini-code-information.component';

describe('ThankYouMiniCodeInformationComponent', () => {
  let component: ThankYouMiniCodeInformationComponent;
  let fixture: ComponentFixture<ThankYouMiniCodeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniCodeInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniCodeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
