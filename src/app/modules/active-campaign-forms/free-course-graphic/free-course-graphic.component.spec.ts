import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCourseGraphicComponent } from './free-course-graphic.component';

describe('FreeCourseGraphicComponent', () => {
  let component: FreeCourseGraphicComponent;
  let fixture: ComponentFixture<FreeCourseGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCourseGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCourseGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
