import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniUxUiAcademyComponent } from './thank-you-mini-ux-ui-academy.component';

describe('ThankYouMiniUxUiAcademyComponent', () => {
  let component: ThankYouMiniUxUiAcademyComponent;
  let fixture: ComponentFixture<ThankYouMiniUxUiAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniUxUiAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniUxUiAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
