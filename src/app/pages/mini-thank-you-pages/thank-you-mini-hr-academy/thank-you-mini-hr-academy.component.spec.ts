import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniHrAcademyComponent } from './thank-you-mini-hr-academy.component';

describe('ThankYouMiniHrAcademyComponent', () => {
  let component: ThankYouMiniHrAcademyComponent;
  let fixture: ComponentFixture<ThankYouMiniHrAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniHrAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniHrAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
