import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouDataComponent } from './thank-you-data.component';

describe('ThankYouDataComponent', () => {
  let component: ThankYouDataComponent;
  let fixture: ComponentFixture<ThankYouDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
