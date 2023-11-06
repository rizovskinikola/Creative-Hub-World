import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpworkLeadFrontEndComponent } from './upwork-lead-front-end.component';

describe('UpworkLeadFrontEndComponent', () => {
  let component: UpworkLeadFrontEndComponent;
  let fixture: ComponentFixture<UpworkLeadFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpworkLeadFrontEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpworkLeadFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
