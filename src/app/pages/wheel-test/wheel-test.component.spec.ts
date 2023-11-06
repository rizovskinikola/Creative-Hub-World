import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelTestComponent } from './wheel-test.component';

describe('WheelTestComponent', () => {
  let component: WheelTestComponent;
  let fixture: ComponentFixture<WheelTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
