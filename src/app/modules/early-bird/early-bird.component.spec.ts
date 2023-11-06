import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyBirdComponent } from './early-bird.component';

describe('EarlyBirdComponent', () => {
  let component: EarlyBirdComponent;
  let fixture: ComponentFixture<EarlyBirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyBirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
