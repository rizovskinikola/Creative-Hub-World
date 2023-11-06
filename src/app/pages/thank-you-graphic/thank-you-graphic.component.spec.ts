import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouGraphicComponent } from './thank-you-graphic.component';

describe('ThankYouGraphicComponent', () => {
  let component: ThankYouGraphicComponent;
  let fixture: ComponentFixture<ThankYouGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
