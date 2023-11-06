import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCourseFrontEndComponent } from './free-course-front-end.component';

describe('FreeCourseFrontEndComponent', () => {
  let component: FreeCourseFrontEndComponent;
  let fixture: ComponentFixture<FreeCourseFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCourseFrontEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCourseFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
