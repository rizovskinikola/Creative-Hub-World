import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToBusinessAnalysisComponent } from './intro-to-business-analysis.component';

describe('IntroToBusinessAnalysisComponent', () => {
  let component: IntroToBusinessAnalysisComponent;
  let fixture: ComponentFixture<IntroToBusinessAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroToBusinessAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToBusinessAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
