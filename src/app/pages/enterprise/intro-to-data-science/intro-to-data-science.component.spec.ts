import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToDataScienceComponent } from './intro-to-data-science.component';

describe('IntroToDataScienceComponent', () => {
  let component: IntroToDataScienceComponent;
  let fixture: ComponentFixture<IntroToDataScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroToDataScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToDataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
