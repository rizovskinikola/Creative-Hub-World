import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMiniCodeAcademyComponent } from './thank-you-mini-code-academy.component';

describe('ThankYouMiniCodeAcademyComponent', () => {
  let component: ThankYouMiniCodeAcademyComponent;
  let fixture: ComponentFixture<ThankYouMiniCodeAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouMiniCodeAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMiniCodeAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
