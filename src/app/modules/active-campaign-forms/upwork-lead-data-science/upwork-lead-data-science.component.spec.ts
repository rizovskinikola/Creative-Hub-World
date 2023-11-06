import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpworkLeadDataScienceComponent } from './upwork-lead-data-science.component';

describe('UpworkLeadDataScienceComponent', () => {
  let component: UpworkLeadDataScienceComponent;
  let fixture: ComponentFixture<UpworkLeadDataScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpworkLeadDataScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpworkLeadDataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
