import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDigitalMarketingAcademyComponent } from './mini-digital-marketing-academy.component';

describe('MiniDigitalMarketingAcademyComponent', () => {
  let component: MiniDigitalMarketingAcademyComponent;
  let fixture: ComponentFixture<MiniDigitalMarketingAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniDigitalMarketingAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniDigitalMarketingAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
