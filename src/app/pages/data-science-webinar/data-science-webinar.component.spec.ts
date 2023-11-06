import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceWebinarComponent } from './data-science-webinar.component';

describe('DataScienceWebinarComponent', () => {
  let component: DataScienceWebinarComponent;
  let fixture: ComponentFixture<DataScienceWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataScienceWebinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScienceWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
