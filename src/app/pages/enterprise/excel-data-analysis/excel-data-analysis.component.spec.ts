import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelDataAnalysisComponent } from './excel-data-analysis.component';

describe('ExcelDataAnalysisComponent', () => {
  let component: ExcelDataAnalysisComponent;
  let fixture: ComponentFixture<ExcelDataAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelDataAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
